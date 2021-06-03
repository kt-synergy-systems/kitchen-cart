class FoodItemPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
      # scope.where(user: user)
    end
  end

  def create?
    @user.role == 'admin' || @user.role == 'employee'
  end

  def show?
    true
  end

  def update?
    @user.role == 'admin' || @user.role == 'employee'
    # user == record.user
  end

  def destroy?
    @user.role == 'admin' || @user.role == 'employee'
    # user == record.user
  end
end
