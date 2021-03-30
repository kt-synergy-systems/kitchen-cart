class Schedule < ApplicationRecord
  belongs_to :food_cart

  validates :location, presence: true
  validates :date, presence: true
end
