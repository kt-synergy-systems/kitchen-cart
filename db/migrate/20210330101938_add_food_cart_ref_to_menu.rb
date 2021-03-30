class AddFoodCartRefToMenu < ActiveRecord::Migration[6.0]
  def change
    add_reference :menus, :food_cart, null: false, foreign_key: true
  end
end
