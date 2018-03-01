Rails.application.routes.draw do

  devise_for :users, :controllers => {:sessions => "users/sessions"}

  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
  end

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show, :update, :delete]
      resources :images, only: [:update]
      resources :mentees, only: [:index, :show]
    end
  end

  root 'static_pages#index'

  get '*path', to: 'static_pages#index'
end
