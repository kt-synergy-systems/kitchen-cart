class Menu < ApplicationRecord
  belongs_to :food_cart
  has_many :food_items, dependent: :destroy
  has_many_attached :photos
end
