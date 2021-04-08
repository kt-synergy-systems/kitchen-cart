class FoodCartsController < ApplicationController
  def index
    @food_carts = FoodCart.all
  end

  def show
    @food_cart = FoodCart.find(params[:id])
  end

  def new
    @food_cart = FoodCart.new
  end

  def create
    @food_cart = FoodCart.new(food_cart_params)

    if @food_cart.save
      redirect_to food_carts_path
    else
      render 'food_cart/new'
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
    @food_cart = Foodcart.find(params[:id])
    @food_cart.destroy
    redirect_to food_carts_path
  end

  private

  def food_cart_params
    params.require(:food_cart).permit
  end
end
