class FoodItem < ApplicationRecord
  belongs_to :menu

  validates food_name: presence: true
  validates food_price: presence: true
  validates food_type: presence: true
  validates food_availability: presence: true
end
