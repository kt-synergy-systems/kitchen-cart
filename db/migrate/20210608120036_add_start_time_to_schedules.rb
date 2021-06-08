class AddStartTimeToSchedules < ActiveRecord::Migration[6.1]
  def change
    add_column :schedules, :start_time, :datetime, null: false
    add_column :schedules, :end_time, :datetime, null: false
  end
end
