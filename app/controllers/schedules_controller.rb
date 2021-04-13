class SchedulesController < ApplicationController
  before_action :set_schedule, only: [:show, :edit, :update, :destroy]

  def index
    @schedule = policy_scope(Schedule)
  end

  def show
    @schedule = Schedule.find(params[:id])
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
      redirect_to schedule_path(@schedule)
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
    params.require(:schedule).permit()
  end

  def set_sechedule
    @menu = Schedule.find(params[:id])
    authorize @schedule
  end
end
