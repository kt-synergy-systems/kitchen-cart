class RemoveColumnFromFoodCart < ActiveRecord::Migration[6.0]
  def change
    remove_column :food_carts, :open, :boolean
  end
end
