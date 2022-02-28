Rails.application.routes.draw do
  root to: 'pages#home'
  get 'wall', to: 'pages#wall'
end
