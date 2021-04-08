class MenuController < ApplicationController

  def index
    @menu = Menu.all
  end

  def show
    @menu = Menu.find(params[:id])
  end

  def new
    @menu = Menu.new
  end

  def create
    @menu = Menu.new(menu_params)

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

end
