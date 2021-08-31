class SchedulePolicy < ApplicationPolicy
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
