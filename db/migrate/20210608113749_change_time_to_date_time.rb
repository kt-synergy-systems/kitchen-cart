class ChangeTimeToDateTime < ActiveRecord::Migration[6.1]
  def change
    remove_column :schedules, :start_time
    remove_column :schedules, :end_time
  end
end
