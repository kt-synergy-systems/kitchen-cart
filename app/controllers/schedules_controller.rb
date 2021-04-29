class SchedulesController < ApplicationController
  before_action :set_schedule, only: [:show, :edit, :update, :destroy]

  def index
    @schedule = policy_scope(Schedule)
  end

  def show
    @food_cart = FoodCart.find(params[:id])
    @schedule = @food_cart.schedule
  end

  def new
    @schedule = Schedule.new
    authorize @schedule
  end

  def create
    @schedule = Schedule.new(schedule_params)
    @food_cart = FoodCart.find(params[:id])
    @foodcart.user = current_user

    if @schedule.save
      redirect_to food_cart_path(@food_cart)
    else
      render 'schedule/new'
    end
  end

  def edit
    @schedule = Schedule.find(params[:id])
  end

  def update
    @schedule = Schedule.find(params[:id])
    @schedule.update(schedule_params)
    redirect_to schedule_path(@schedule)
  end

  def destroy
    @schedule = Schedule.find(params[:id])
    @schedule.destroy
    redirect_to schedule_path
  end

  private
  def schedule_params
    params.require(:schedule).permit(:location, :date, :start_time, :end_time, :food_cart_id)
  end

  def set_schedule
    @food_cart = FoodCart.find(params[:id])
    @schedule = @food_cart.schedule
    authorize @schedule
  end
end
