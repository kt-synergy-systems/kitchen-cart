class MenuController < ApplicationController
  before_action :set_menu, only: [:show, :edit, :update, :destroy]

  def index
    @menu = policy_scope(Menu)
  end

  def show
    @menu = Menu.find(params[:id])
  end

  def new
    @menu = Menu.new
    authorize @menu
  end

  def create
    @menu = Menu.new(menu_params)
    @food_cart = FoodCart.find(params[:id])
    @foodcart.user = current_user

    if @menu.save
      redirect_to menu_path(@menu)
    else
      render 'menu/new'
    end
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
  def menu_params
    params.require(:menu).permit()
  end

  def set_menu
    @menu = Menu.find(params[:id])
    authorize @menu
  end
end
