class Api::V1::MessagesController < ApplicationController
  before_action :find_channel

  def index
    @messages = Message.where(channel: @channel)
    @formatted_messages = []
    @messages.each do |message|
      @formatted_messages << {
        id: message.id,
        author: User.find(message.user_id).email,
        content: message.content,
        created_at: message.created_at
      }
    end
    render json: @formatted_messages
  end

  def create
  end

  private

  def find_channel
    @channel = Channel.find_by(name: params["channel_id"])
  end
end
