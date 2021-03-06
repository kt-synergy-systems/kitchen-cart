class FoodCartsController < ApplicationController
  after_action :verify_authorized, only: %i[new create update destroy]
  def index
    if params[:query].present?
      @food_carts = policy_scope(FoodCart).search_by_name_location_category(params[:query])
    else
      @food_carts = policy_scope(FoodCart)
    end
    @likes = []
    @schedules = []
    @food_carts.map do |food_cart|
      @likes << { id: food_cart.id, liked: current_user.liked?(food_cart) } unless current_user == nil
      food_cart.schedules.each do |schedule|
        @schedules << schedule
      end
    end
  end

  def show
    @food_cart = FoodCart.find(params[:id])
    @photos = @food_cart.food_items.map do |item|
      { food_item_id: item.id, key: item.photo.key }
    end
    authorize @food_cart
  end

  def new
    @food_cart = FoodCart.new
    authorize @food_cart
  end

  def create
    @food_cart = FoodCart.new(food_cart_params)
    @food_cart.user = current_user
    authorize @food_cart
    create_menu
    if @food_cart.save!
      redirect_to food_cart_path(@food_cart), notice: "Food Cart Created"
    else
      render :new
    end
  end

  def edit
    @food_cart = FoodCart.find(params[:id])
  end

  def update
    @food_cart = FoodCart.find(params[:id])
    authorize @food_cart
    @food_cart.update!(food_cart_params)

    redirect_to food_cart_path(@food_cart)
  end

  def destroy
    @food_cart = FoodCart.find(params[:id])
    @food_cart.destroy
    render json: { 'ok' => true }.to_json
  end

  # Work in progress to grab current location
  def user_location
    @user_location = params[:javascriptobject]
  end

  def upvote
    @food_cart.upvote_from current_user
    render json: @food_cart.to_json
  end

  def downvote
    @food_cart.downvote_from current_user
    render json: @food_cart.to_json
  end

  private

  def food_cart_params
    params.require(:food_cart).permit(:name, :menu, :category, :cart_description, :schedule, :phone_number, :photo)
  end

  def create_menu
    @menu = Menu.new
    @menu.food_cart = @food_cart
    @user = current_user
    @menu.save
    authorize @menu
  end

  def set_food_cart
    @food_cart = FoodCart.find(params[:id])
    authorize @food_cart
  end
end

# Assign a user as an employee to a food cart by food cart admin
# searchs
# employee adds food cart id to profile
# list of employees
# remove the food Cart ID from the employee
