class RemoveColumnFromFoodCarts < ActiveRecord::Migration[6.0]
  def change
    remove_reference :food_carts, :schedule, null: false, foreign_key: true
  end
end
