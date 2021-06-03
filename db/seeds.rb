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
                role: 1
})

User.create!( {
                first_name: 'Hongjoo',
                last_name: 'Yang',
                email: 'hongjoo@gmail.com',
                password: 'foodcart2',
                phone_number: '1234',
                role: 1
})
User.create!( {
                first_name: 'Josh',
                last_name: 'Hume',
                email: 'a@a.com',
                password: '123123',
                phone_number: '1234',
                role: 1
})

User.create!( {
                first_name: 'Marisa',
                last_name: 'Cassidy',
                email: 'marisa@gmail.com',
                password: 'foodcart4',
                phone_number: '1234',
                role: 1
})

User.create!( {
                first_name: 'Brandon',
                last_name: 'Lindberg',
                email: 'brandon@gmail.com',
                password: 'foodcart5',
                phone_number: '1234',
                role: 1
})

User.create!( {
                first_name: 'test',
                last_name: 'user',
                email: 'test@gmail.com',
                password: 'foodcart6',
                phone_number: '1234',
                role: 0
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
  20.times do
    Schedule.create!(
      {
        location: ["Tokyo", "Meguro", "Shinagawa", "Shinjuku", "Shibuya"].sample,
        latitude: 35.6812 + rand(-0.03..0.03),
        longitude: 139.7671 + rand(-0.03..0.03),
        date: Date.new(Date.today.year, Date.today.month, (1..Time.days_in_month(Date.today.month, Date.today.year)).to_a.sample),
        start_time: Time.now.strftime("%k:%M %p"),
        end_time: (Time.now + 3.hour).strftime("%k:%M %p"),
        food_cart: food_cart
    })
  end
end

puts "done"

puts "generating food items"

Menu.all.each do |menu|
  20.times do
    FoodItem.create!(
      food_name: Faker::Food.dish,
      food_price: rand(1..10),
      food_description: Faker::Food.description,
      food_type: %w[food drink].sample,
      food_availability: [true, false].sample,
      menu: menu
    )
  end
end

puts "done"
