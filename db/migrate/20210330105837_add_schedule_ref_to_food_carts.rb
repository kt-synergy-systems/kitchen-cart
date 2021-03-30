class AddScheduleRefToFoodCarts < ActiveRecord::Migration[6.0]
  def change
    add_reference :food_carts, :schedule, foreign_key: true
  end
end
