class CreateFoodItems < ActiveRecord::Migration[6.0]
  def change
    create_table :food_items do |t|
      t.boolean :food_availability
      t.text :food_description
      t.string :food_price
      t.string :food_name
      t.string :food_type
      t.references :menu, null: false, foreign_key: true

      t.timestamps
    end
  end
end
