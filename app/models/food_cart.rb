class FoodCart < ApplicationRecord
  has_many :users
  belongs_to :user

  validates :name, presence: true, length: { minimum: 2 }
  validates :category, presence: true
  validates :open, default: false
  validates :cart_description, presence: true
end
