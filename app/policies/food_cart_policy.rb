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
    # @user == record.user
    true
  end

  def show?
    true
  end

  def update?
    user == record.user
  end

  def destroy?
    user == record.user
  end

  def upvote?
    true
  end

  def downvote?
    true
  end
end
