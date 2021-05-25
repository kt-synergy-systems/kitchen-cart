class MenusController < ApplicationController
  before_action :set_menu, only: [:new, :create, :show, :edit, :update, :destroy]

  def index
    @menus = policy_scope(Menu)
  end

  def show
    @food_cart = FoodCart.find(params[:food_cart_id])
    @menu = @food_cart.menu
    authorize @menu
  end

  def new
    @food_cart = FoodCart.find(params[:food_cart_id])
    @menu = Menu.new
    authorize @menu
  end

  def create
    @food_cart = FoodCart.find(params[:food_cart_id])
    @menu = Menu.new
    @menu.food_cart = @food_cart
    @user = current_user

    if @menu.save
      redirect_to food_cart_path(@food_cart)
    else
      render 'menus/new'
    end
    authorize @menu
  end

  def edit
    @menu = Menu.find(params[:id])
  end

  def update
    @menu = Menu.find(params[:id])
    @menu.update(menu_params)
    redirect_to menu_path(@menu)
  end

  def destroy
    @menu = Menu.find(params[:id])
    @menu.destroy
    redirect_to menu_path
  end

  private

  # def menu_params
  # params.require(:menu).permit(photos: [])
  # end

  #method for authorization in the before action
  def set_menu
    @food_cart = FoodCart.find(params[:food_cart_id])
    @menu = @food_cart.menu
    # authorize @menu
  end
end
