class FoodItemsController < ApplicationController
  before_action :set_menu, only: [:show, :edit, :update, :destroy]
  def index
    @food_items = policy_scope(FoodItem)
  end

  def show
    @food_item = FoodItem.find(params[:id])
  end

  def new
    @food_item = FoodItem.new
    authorize @food_item
  end

  def create
    @food_item = FoodItem.new(food_item_params)
    @food_cart = FoodCart.find(params[:id])
    @foodcart.user = current_user

    if @food_item.save
      redirect_to food_items_path
    else
      render 'food_item/new'
    end
  end

  def edit
    @food_item = FoodItem.find(params[:id])
  end

  def update
    @food_item = FoodItem.find(params[:id])
    @food_item.update(food_item_params)
    redirect_to food_item_path(@food_item)
  end

  def destroy
    @food_item = FoodItem.find(params[:id])
    @food_item.destroy
    redirect_to food_items_path
  end

  private

  def food_item_params
    params.require(:food_item).permit
  end

  def set_food_item
    @food_item = FoodItem.find(params[:id])
    authorize @food_item
  end
end
