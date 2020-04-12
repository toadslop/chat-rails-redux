class Message < ApplicationRecord
  belongs_to :user
  belongs_to :channel
  validates :content, :user, :channel, presence: true
end
