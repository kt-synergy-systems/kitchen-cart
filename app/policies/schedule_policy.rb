class SchedulePolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
      # scope.where(user: user)
    end
  end

  def new?
    create?
  end

  def create?
    true
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
