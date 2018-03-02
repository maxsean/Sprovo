class Grade < ApplicationRecord
  belongs_to :user
  belongs_to :course

  validates :user_id, uniqueness: {
    scope: :course_id
  }
  validates :score, presence: true
end
