Rails.application.routes.draw do
  get 'welcome/home'
  root 'welcome#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '*path', to: 'welcome#home', via: :all
end
