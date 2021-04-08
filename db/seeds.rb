# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "clearing database..."

FoodItem.delete_all
Menu.delete_all
Schedule.delete_all
FoodCart.delete_all
User.delete_all

puts "done"
puts "generating users..."
# => user seeds
User.create!( {
                first_name: 'Dan',
                last_name: 'Ring',
                email: 'dan@gmail.com',
                password: 'foodcart1',
                phone_number: '1234',
                admin: true
})

User.create!( {
                first_name: 'Hongjoo',
                last_name: 'Yang',
                email: 'hongjoo@gmail.com',
                password: 'foodcart2',
                phone_number: '1234',
                admin: true
})

User.create!( {
                first_name: 'Josh',
                last_name: 'Hume',
                email: 'josh@gmail.com',
                password: 'foodcart3',
                phone_number: '1234',
                admin: true
})

User.create!( {
                first_name: 'Marisa',
                last_name: 'Cassidy',
                email: 'marisa@gmail.com',
                password: 'foodcart4',
                phone_number: '1234',
                admin: true
})

User.create!( {
                first_name: 'Brandon',
                last_name: 'Lindberg',
                email: 'brandon@gmail.com',
                password: 'foodcart5',
                phone_number: '1234',
                admin: true
})

puts "done"
puts "generating foodcarts, menus and schedules"

20.times do
  food_cart = FoodCart.create!({
                                 name: Faker::Restaurant.name,
                                 category: Faker::Restaurant.type,
                                 open: true,
                                 cart_description: Faker::Restaurant.description,
                                 user: User.all.sample
  })
  Menu.create!({
                 food_cart: food_cart

  })
  time = Time.now
  Schedule.create!(
    {
      location: [%w(35.633983 139.71600), %w(35.6580339 139.7016358), %w(35.6641665 139.7815059), %w(35.646643 139.710045), %w(35.6659486 139.7418724)].sample,
      date: Faker::Date.between(from: '2020-09-23', to: '2020-09-25'),
      start_time: Time.now.strftime("%k:%M %p"),
      end_time: (Time.now + 3.hour).strftime("%k:%M %p"),
      food_cart: food_cart
  })
end

puts "done"

puts "generating food items"

20.times do
  FoodItem.create!(
    food_name: Faker::Food.dish,
    food_price: rand(1..10),
    food_description: Faker::Food.description,
    food_type: %w[food drink].sample,
    food_availability: true,
    menu: Menu.all.sample
  )
end

puts "done"
