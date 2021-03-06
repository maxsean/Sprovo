class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  mount_uploader :profile_photo, ProfilePhotoUploader

  belongs_to :mentor, class_name: "User", optional: true

  has_many :grades
  has_many :courses, through: :grades
  has_many :sport_stats
  has_many :sports, through: :sport_stats

  has_many :mentees, class_name: "User", foreign_key: "mentor_id"


  private
   def avatar_size_validation
     errors[:avatar] << "should be less than 500 KB" if avatar.size > 0.5.megabytes
   end
end
