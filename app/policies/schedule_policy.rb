class SchedulePolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
      # scope.where(user: user)
    end
  end

  def initalize
    @current_user = current_user
    @food_cart = FoodCart.find_by(user_id: current_user.id)
    @schedule = schedule
  end

    def new?
      true
    end

    def create?
      user == record.food_cart.user
    end

    def show?
      true
    end

    def update?
      user == @food_cart.user
    end

    def destroy
      user == record.food_cart.user
    end

end
