class Api::V1::GradesController < Api::V1::ApiController
  #too much logic. consider making module or move business logic to models

  def create
    body = JSON.parse(request.body.read)
    mentee = User.find(body["user_id"])
    if current_user.mentees.include?(mentee)
      if Course.find_by(name: body["course"]).nil?
        course = Course.create(name: body["course"])
      else
        course = Course.find_by(name: body["course"])
      end
      new_grade = Grade.new(user: mentee, course: course, year: body["year"], quarter: body["quarter"], score: body["score"])

      if new_grade.save
        render json: {success: "Update Successful"}
      else
        render json: {error: "An error occurred. Make sure all fields are filled or if the record already exits."}
      end
    else
      render json: {error: "You do not have permission to edit this information"}
    end
  end

  def show
    mentee = User.find(params[:id])

    if current_user == mentee || current_user.mentees.include?(mentee)

      output = {}
      grades = Grade.where(user: mentee)

      grades.each do |grade|
        year = grade.year
        quarter = grade.quarter
        course = grade.course.name
        score = grade.score

        if output[year]
          if output[year][quarter]
            output[year][quarter][course] = score
          else
            output[year][quarter] = {}
            output[year][quarter][course] = score
          end
        else
          output[year] = {}
          output[year][quarter] = {}
          output[year][quarter][course] = score
        end
      end
      render json: output
    else
      render json: {error: "You do not have permission to view this information"}
    end
  end

  def update
    body = JSON.parse(request.body.read)
    mentee = User.find(body["user_id"])
    if current_user.mentees.include?(mentee)
      course = Course.find_by(name: body["course"])
      grade = Grade.find_by(user: mentee, course: course)
      grade.update_attributes(score: body["score"])

      render json: {success: "Update Successful"}
    else
      render json: {error: "You do not have permission to edit this information"}
    end
  end

  def destroy
    body = JSON.parse(request.body.read)
    mentee = User.find(body["user_id"])
    if current_user.mentees.include?(mentee)
      course = Course.find_by(name: body["course"])
      grade = Grade.find_by(user: mentee, course: course)

      if grade.destroy
        render json: {success: "Delete Successful"}
      else
        render json: {error: "An error has occurred"}
      end
    else
      render json: {error: "You do not have permission to delete this information"}
    end
  end
end
