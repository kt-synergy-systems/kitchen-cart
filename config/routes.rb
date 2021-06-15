Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :food_carts do
    resources :menus do
      resources :food_items
    end
    resources :schedules
    member do
      put "like" => "food_carts#upvote"
    end
  end

  post 'food_carts/user_location'
end
