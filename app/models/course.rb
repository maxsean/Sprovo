class Course < ApplicationRecord
  has_many :grades
  has_many :users, through: :grades

  validates :name, presence: true, uniqueness: true
end
