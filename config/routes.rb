Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :categories do
      resources :items 
    end
  end
  namespace :api do
    resources :jobs
  end
end
