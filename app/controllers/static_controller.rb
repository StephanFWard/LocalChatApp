# app/controllers/static_controller.rb

class StaticController < ApplicationController
    def index
        render file: 'public/local-chat-app/index.html'
    end
  end