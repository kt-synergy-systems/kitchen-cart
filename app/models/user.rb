class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable

  acts_as_voter
  has_many :food_carts
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :phone_number, presence: true

  enum role: [:employee, :admin]

  after_initialize do
    if self.new_record?
      self.role ||= :employee
    end
  end
end
