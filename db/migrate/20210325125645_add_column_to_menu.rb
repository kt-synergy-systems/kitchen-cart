class AddColumnToMenu < ActiveRecord::Migration[6.0]
  def change
    add_column food_cart: references, food_items: references
  end
end
