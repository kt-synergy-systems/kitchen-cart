class FoodItemPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
      # scope.where(user: user)
    end
  end

  def initalize
    @current_user = current_user
    @food_cart = food_cart
  end

  def create?
    true
  end

  def show?
    true
  end

  def update?
    user == record.menu.food_cart.user
  end

  def destroy?
    user == record.menu.food_cart.user
  end
end
