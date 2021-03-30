class AddOpenToFoodCarts < ActiveRecord::Migration[6.0]
  def change
    add_column :food_carts, :open, :boolean, :default => false
  end
end
