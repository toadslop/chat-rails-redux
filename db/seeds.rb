# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# destroy database records
puts 'Destroying all records...'
Message.destroy_all
Channel.destroy_all
User.destroy_all
puts '...finished'

# stock data
puts 'Making stock data...'
User.create!(email: 'test@gmail.com', password: '123123')
Channel.create!(name: 'Tokyo')
puts '...finished'

# random data

puts 'generating fake users'
number = '100000'
10.times do
  User.create!(
    email: Faker::Internet.email,
    password: number
  )
  number = (number.to_i + 1).to_s
end
puts '...done'

puts 'Generating random channels...'
5.times do
  Channel.create!(name: Faker::Address.city)
end
puts '...done'

puts 'Generating fake messages...'
Channel.all.each do |channel|
  rand(1..10).times do
    Message.create!(
      user: User.take,
      channel: channel,
      content: Faker::Lorem.sentence(word_count: rand(3..10))
    )
  end
end
puts '...done'
