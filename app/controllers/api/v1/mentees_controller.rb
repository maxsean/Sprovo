class Api::V1::MenteesController < Api::V1::ApiController

  def index
    if current_user
      mentees = current_user.mentees.order('last_name')
      render json: mentees
    else
      render json: {error: "Please Sign In"}
    end
  end

  def show
    if current_user
      mentee = User.find_by(handle: params[:id])

      if current_user == mentee || current_user.mentees.include?(mentee) || current_user.role != "student"
        render json: mentee
      else
        render json: {error: "You do not have permission to view this page"}
      end
    else
      render json: {error: "Please Sign In"}
    end
  end
end
