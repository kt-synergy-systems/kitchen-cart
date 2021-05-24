class FoodItemsController < ApplicationController
  before_action :set_food_item, only: [:show, :edit, :update, :destroy]
  def index
    @food_items = policy_scope(FoodItem)
  end

  def show
    @food_item = FoodItem.find(params[:id])
  end

  def new
    @food_cart = FoodCart.find(params[:food_cart_id])
    @menu = @food_cart.menu
    @food_item = FoodItem.new

    authorize @food_item
  end

  def create
    @food_cart = FoodCart.find(params[:food_cart_id])
    @food_item = FoodItem.new(food_item_params)
    @menu = @food_cart.menu
    @food_item.menu = @menu
    @user = current_user

    if @food_item.save!
      redirect_to food_cart_path(@food_cart)
    else
      render 'food_items/new'
    end

    authorize @food_item
  end

  def edit
    @food_item = FoodItem.find(params[:id])
  end

  def update
    @food_item = FoodItem.find(params[:id])
    @food_item.update
    redirect_to food_cart_path(@food_cart)
  end

  def destroy
    @food_item = FoodItem.find(params[:id])
    @food_item.destroy
    redirect_to food_items_path
  end

  private

  def food_item_params
    params.require(:food_item).permit(:food_name, :food_description, :food_price, :food_type, photos: [])
  end

  def set_food_item
    @food_cart = FoodCart.find(params[:menu_id])
    @menu = @food_cart.menu
    @food_item = @food_cart.food_item

    authorize @food_item
  end
end
