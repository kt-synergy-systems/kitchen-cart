class FoodCart < ApplicationRecord

  acts_as_votable
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
  validates :phone_number, presence: true

  include PgSearch::Model
  pg_search_scope :search_by_name_location_category,
    against: [ :name, :category ],
  associated_against: {
    schedules: [:location]
  },
  using: {
    tsearch: { prefix: true }
  }
end
