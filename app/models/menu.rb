class Menu < ApplicationRecord
  belongs_to :food_cart
  has_many :food_items
end
