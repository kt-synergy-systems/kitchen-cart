class FoodItem < ApplicationRecord
  belongs_to :menu
  has_one_attached :photo

  validates :food_name, presence: true, length: { maximum: 60 }
  validates :food_price, presence: true
  validates :food_type, presence: true
  validates :food_description, length: { maximum: 140 }
  FOOD_TYPES = %w[food drink]
end
