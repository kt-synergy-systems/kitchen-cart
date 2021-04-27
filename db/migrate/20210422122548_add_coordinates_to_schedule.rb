class AddCoordinatesToSchedule < ActiveRecord::Migration[6.1]
  def change
    add_column :schedules, :latitude, :float
    add_column :schedules, :longitude, :float
  end
end
