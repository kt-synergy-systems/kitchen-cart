class FoodCart < ApplicationRecord

  acts_as_votable
  has_many :users
  belongs_to :user
  has_many :schedules, dependent: :destroy
  has_one :menu, dependent: :destroy
  has_many :food_items, through: :menu

  has_one_attached :photo

  validates :name, presence: true, length: { minimum: 2, maximum: 60 }
  validates :category, presence: true
  validates :cart_description, presence: true, length: { maximum: 140 }
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
