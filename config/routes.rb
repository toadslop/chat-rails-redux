Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
#, defaults: { format: :json }
  namespace :api do
    namespace :v1 do
      resources :channels, only: [:index] do
        resources :messages, only: [:index, :create]
      end
    end
  end

  resources :channels, only: [:show]
  root to: 'channels#show'
end
