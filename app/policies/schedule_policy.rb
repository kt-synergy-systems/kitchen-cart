class SchedulePolicy < ApplicationPolicy
  class Scope < Scope

    def initialize(food_cart, scope)
      @food_cart = food_cart
      @scope = scope
    end

    def resolve
      scope.all
      # scope.where(user: user)
    end

    def new?
      create?
    end

    def create?
      user == record.user
    end

    def show?
      true
    end

    def update?
      user == record.user
    end

    def destroy
      user == record.user
    end

  end
end
