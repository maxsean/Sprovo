class Api::V1::UsersController < Api::V1::ApiController

  def update
    body = JSON.parse(request.body.read)

    user = User.find(params[:id])
    user.update_attributes(bio: body["user"]["bio"])

  end
end
