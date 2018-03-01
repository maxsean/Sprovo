class Api::V1::ApiController < ActionController::Base
  protect_from_forgery with: :null_session

  # def current_user
  #   if session[:user_id]
  #     @current_user ||= User.find(session[:user_id]) if session[:user_id]
  #   elsif cookies.signed[:user_id]
  #     user = User.find_by(id: cookies.signed[:user_id])
  #     if user.present? && user.authenticated?(:remember, cookies[:remember_token])
  #       sign_in(user)
  #       @current_user = user
  #     end
  #   end
  # end
end
