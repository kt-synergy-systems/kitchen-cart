class Schedule < ApplicationRecord
  belongs_to :food_cart

  validates :location, presence: true
  #geocoded_by :location    #Removed to use latitude and longitude--Joshua
  validates :date, presence: true
  #after_validation :geocode, if: :will_save_change_to_location?   #Removed to use latitude and longitude--JOshua
  validates :latitude, presence: true
  validates :longitude, presence: true
end
