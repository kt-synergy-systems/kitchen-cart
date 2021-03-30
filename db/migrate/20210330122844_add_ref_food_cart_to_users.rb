class AddRefFoodCartToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :food_cart, foreign_key: true
  end
end
