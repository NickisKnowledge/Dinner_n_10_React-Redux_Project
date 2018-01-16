Rails.application.routes.draw do
  resources :dinners, only: [:index, :show, :create, :destroy]
end
