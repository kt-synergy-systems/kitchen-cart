class CreateFoodCarts < ActiveRecord::Migration[6.0]
  def change
    create_table :food_carts do |t|
      t.string :name
      t.string :category
      t.text :cart_description
      t.boolean :open

      t.timestamps
    end
  end
end
