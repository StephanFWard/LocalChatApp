class WebSocketController < ApplicationController
    include ActionController::Live
  
    def connect
      response.headers['Content-Type'] = 'text/event-stream'
      sse = SSE.new(response.stream, retry: 300, event: 'message')
      sse.write({ username: current_user, location: current_location }, event: 'user_join')
  
      # Keep the connection open
      loop do
        sleep 2
      end
    rescue StandardError => e
      Rails.logger.error("WebSocket Error: #{e.message}")
    ensure
      sse.close
    end
  
    private
  
    def current_user
      ENV['USERNAME'] || 'Unknown User'
    end
  
    def current_location
      ENV['USERPROFILE'] || 'Unknown Location'
    end
  end