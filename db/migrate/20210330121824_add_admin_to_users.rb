class AddAdminToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :admin, :boolean, :default => false
    add_column :users, :default, :string
    add_column :users, :false, :string
  end
end
