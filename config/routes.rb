# config/routes.rb

Rails.application.routes.draw do
  get '*path', to: 'static#index', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }

  get 'web_socket/connect', to: 'web_socket#connect'
end
