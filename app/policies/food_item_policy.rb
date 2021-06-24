class FoodItemPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
      # scope.where(user: user)
    end
  end

  def create?
    true
  end

  def show?
    true
  end

  def update?
    # user == record.user
    true
  end

  def destroy?
    # user == record.user
    true
  end
end
