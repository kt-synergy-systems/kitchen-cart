# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "generating users..."
# => user seeds
User.new( {
            first_name: 'Dan',
            last_name: 'Ring',
            email: 'dan@gmail.com'
            password: 'foodcart1',
            admin: true
})

User.new( {
            first_name: 'Hongjoo',
            last_name: 'Yang',
            email: 'hongjoo@gmail.com',
            password: 'foodcart2',
            admin: true
})

User.new( {
            first_name: 'Josh',
            last_name: 'Hume',
            email: 'josh@gmail.com',
            password: 'foodcart3',
            admin: true
})

User.new( {
            first_name: 'Marisa',
            last_name: 'Cassidy',
            email: 'marisa@gmail.com',
            password: 'foodcart4',
            admin: true
})

User.new( {
            first_name: 'Brandon',
            last_name: 'Lindberg',
            email: 'brandon@gmail.com',
            password: 'foodcart5',
            admin: true
})

puts "done"
puts "generating foodcarts"

20.times do
  FoodCart.new({
                 name: Faker::Restaurant.name,
                 category: Faker::Restaurant.type,
                 open: true,
                 cart_description: Faker::Restaurant.description,
                 user: User.all.sample,
                 menu: Menu.all.sample,
                 schedule: Schedule.all.sample
  })
end

puts "done"
puts "generating food items"

20.times do
  FoodItem.new({
                 food_name: Faker::Food.dish,
                 food_price: [1..10].sample,
                 food_description: Faker::Food.description,
                 food_type: %w[food drink].sample,
                 food_availability: [true, false].sample

  })
end

puts "done"
puts "generating menus"

20.times do
  Menu.new({
             food_items: FoodItem.all(sample)
  })
end

20.times do
  Schedule.new({
                 location: lat:%w[%w[35.633983 139.71600] %w[35.6580339 139.7016358] %w[35.6641665 139.7815059] %w[35.646643 139.710045] %w[35.6659486 139.7418724]].sample
                 date: Faker::Date.between(from: '2020-09-23', to: '2020-09-25'),
                 start_time: w%[0..23],
                 end_time: w%[0..23],
  })
end
