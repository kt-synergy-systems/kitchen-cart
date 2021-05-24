class FoodCart < ApplicationRecord
  has_many :users
  belongs_to :user
  has_many :schedules
  has_one :menu
  has_many :food_items, through: :menu

  has_one_attached :photo

  validates :name, presence: true, length: { minimum: 2 }
  validates :category, presence: true
  # validates :open, default: false
  validates :cart_description, presence: true
end
