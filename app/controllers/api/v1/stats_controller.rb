class Api::V1::StatsController < Api::V1::ApiController

  def create
    body = JSON.parse(request.body.read)
    mentee = User.find(body["user_id"])
    if current_user.mentees.include?(mentee)
      if Sport.find_by(name: body["sport"]).nil?
        sport = Sport.create(name: body["sport"])
      else
        sport = Sport.find_by(name: body["sport"])
      end
      new_stat = SportStat.new(user: mentee, sport: sport, year: body["year"], position: body["position"], description: body["description"], stat: body["stat"].to_i)

      if new_stat.save
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
      stats = SportStat.where(user: mentee)

      stats.each do |stati|
        sport = stati.sport.name
        year = stati.year
        position = stati.position
        description = stati.description
        stat = stati.stat

        if output[sport]
          if output[sport][year]
            if output[sport][year][position]
              output[sport][year][position][description] = stat
            else
              output[sport][year][position] = {}
              output[sport][year][position][description] = stat
            end
          else
            output[sport][year] = {}
            output[sport][year][position] = {}
            output[sport][year][position][description] = stat
          end
        else
          output[sport] = {}
          output[sport][year] = {}
          output[sport][year][position] = {}
          output[sport][year][position][description] = stat
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
      sport = Sport.find_by(name: body["sport"])
      stat = SportStat.find_by(user: mentee, sport: sport, year: body["year"], position: body["position"], description: body["description"])
      stat.update_attributes(stat: body["stat"])

      render json: {success: "Update Successful"}
    else
      render json: {error: "You do not have permission to edit this information"}
    end

  end

  def destroy
    body = JSON.parse(request.body.read)
    mentee = User.find(body["user_id"])
    if current_user.mentees.include?(mentee)
      sport = Sport.find_by(name: body["sport"])
      stat = SportStat.find_by(user: mentee, sport: sport, year: body["year"], position: body["position"], description: body["description"])

      if stat.destroy
        render json: {success: "Delete Successful"}
      else
        render json: {error: "An error has occurred"}
      end
    else
      render json: {error: "You do not have permission to delete this information"}
    end
  end

end
