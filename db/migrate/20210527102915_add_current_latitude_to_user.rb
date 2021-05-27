class AddCurrentLatitudeToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :current_latitude, :float
    add_column :users, :current_longitude, :float
  end
end
