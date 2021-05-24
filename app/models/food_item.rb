class FoodItem < ApplicationRecord
  belongs_to :menu
  has_many_attached :photos

  validates :food_name, presence: true
  validates :food_price, presence: true
  validates :food_type, presence: true
  FOOD_TYPES = %w[food drink]
end
