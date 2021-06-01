class FoodCartPolicy < ApplicationPolicy
  attr_reader :current_user

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
    @current_user.role == 'admin'
  end

  def show?
    true
  end

  def update?
    @current_user.role == 'admin'
  end

  def destroy?
    @current_user.role == 'admin'
  end
end
