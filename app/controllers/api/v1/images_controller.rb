class Api::V1::ImagesController < Api::V1::ApiController

  def update
    user = User.find(params[:id])
    user.update_attributes(profile_photo: params["uploaded_image"])
  end
end
