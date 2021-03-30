class CreateSchedules < ActiveRecord::Migration[6.0]
  def change
    create_table :schedules do |t|
      t.string :location
      t.date :date
      t.time :start_time
      t.time :end_time

      t.timestamps
    end
  end
end
