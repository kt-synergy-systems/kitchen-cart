class FoodCartsController < ApplicationController
  before_action :set_food_cart, only: [:show, :edit, :update, :destroy]
  def index
    @food_carts = policy_scope(FoodCart)
    @markers = []
    @food_carts.map do |food_cart|
      food_cart.schedules.each do |schedule|
        if schedule.date == Date.today
          @markers << {
            lat: schedule.latitude,
            lng: schedule.longitude
          }
        end
      end
    end
    @markers
  end

  def show
    @food_cart = FoodCart.find(params[:id])
  end

  def new
    @food_cart = FoodCart.new
    authorize @food_cart
  end

  def create
    @food_cart = FoodCart.new(food_cart_params)
    @food_cart.user = current_user
    authorize @food_cart
    if @food_cart.save!
      redirect_to new_food_cart_menu_path(@food_cart), notice: "Food Cart Created"
    else
      render :new
    end
  end

  def edit
    @food_cart = FoodCart.find(params[:id])
  end

  def update
    @food_cart = FoodCart.find(params[:id])
    @food_cart.update(food_cart_params)
    redirect_to food_cart_path(@food_cart)
  end

  def destroy
    @food_cart = FoodCart.find(params[:id])
    @food_cart.schedule.destroy unless @food_cart.schedule == nil
    @menu = @food_cart.menu
    if @menu != nil
      @food_items = @menu.food_items.each do |food_item|
        food_item.destroy
      end
      @menu.destroy
    end
    @food_cart.destroy
    redirect_to food_carts_path
  end

  private

  def food_cart_params
    params.require(:food_cart).permit(:name, :menu, :category, :cart_description, :schedule)
  end

  def set_food_cart
    @food_cart = FoodCart.find(params[:id])
    authorize @food_cart
  end
end
