class AddPhoneNumberToFoodCarts < ActiveRecord::Migration[6.1]
  def change
    add_column :food_carts, :phone_number, :string
  end
end
