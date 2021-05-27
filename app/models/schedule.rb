class Schedule < ApplicationRecord
  belongs_to :food_cart

  validates :location, presence: true
  geocoded_by :location
  validates :date, presence: true, uniqueness: true
  after_validation :geocode, if: :will_save_change_to_location?
end
