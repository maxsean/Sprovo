class Api::V1::UsersController < Api::V1::ApiController
#too much logic. consider making module or move business logic to models
  def update
    body = JSON.parse(request.body.read)
    to_update = body["user"]
    user = User.find(params[:id])

    if current_user && current_user == user
      if to_update["bio"]
        user.update_attributes(bio: to_update["bio"])

        render json: {success: "Update Successful"}
      elsif to_update["first_name"]
        user.update_attributes(
          first_name: to_update["first_name"],
          last_name: to_update["last_name"],
          phone: to_update["phone"],
          school: to_update["school"],
        )

        render json: {success: "Update Successful"}
      end
    else
      render json: {error: "You do not have permission to edit this information"}
    end

  end
end
