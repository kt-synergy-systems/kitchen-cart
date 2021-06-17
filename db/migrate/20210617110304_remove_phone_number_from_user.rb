class RemovePhoneNumberFromUser < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :phone_number
  end
end
