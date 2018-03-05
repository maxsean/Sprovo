class Api::V1::ImagesController < Api::V1::ApiController
  #consider validating http request

  def update
    user = User.find(params[:id])
    user.update_attributes(profile_photo: params["uploaded_image"])
  end
end
