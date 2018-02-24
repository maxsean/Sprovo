Rails.application.routes.draw do

  devise_for :users, controllers: { sessions: "users/sessions" }

  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
  end

  root 'static_pages#index'

  get '*path', to: 'static_pages#index'
end
