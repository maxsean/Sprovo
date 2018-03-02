class SportStat < ApplicationRecord
  belongs_to :user
  belongs_to :sport

  validates :description, presence: true
  validates :stat, presence: true, numericality: true
  validates :position, presence: true
  validates :year, presence: true
end
