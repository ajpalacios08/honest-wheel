Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :cars, param: :slug
      resources :users, only: [:create]
      resources :reviews, only: [:create, :destroy]
      resources :log_in, only: [:create]
    end
  end

  get '*path', to: 'pages#index', via: :all
end
