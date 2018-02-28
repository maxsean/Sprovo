class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  mount_uploader :profile_photo, ProfilePhotoUploader

  private
   def avatar_size_validation
     errors[:avatar] << "should be less than 500 KB" if avatar.size > 0.5.megabytes
   end
end
