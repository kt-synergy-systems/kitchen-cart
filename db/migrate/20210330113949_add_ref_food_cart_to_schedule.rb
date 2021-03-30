class AddRefFoodCartToSchedule < ActiveRecord::Migration[6.0]
  def change
    add_reference :schedules, :food_cart, foreign_key: true
  end
end
