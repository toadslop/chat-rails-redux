class Api::V1::ChannelsController < ApplicationController
  def index
    @channels = Channel.select(:name)
    render json: @channels
  end
end
