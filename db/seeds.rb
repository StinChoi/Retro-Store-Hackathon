# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

prevCats = Category.all.length
prevJobs = Jobs.all.length
Category.destroy_all
Jobs.destroy_all

puts "#{prevCats} categories cleared"
puts "#{prevJobs} jobs cleared"

item_names = [Faker::Commerce.product_name, Faker::Game.title, Faker::Movie.title]

10.times do 
    category = Category.create(name: Faker::Commerce.department)
    10.times do
        category.items.create(
            name: item_names.sample,
            description: Faker::ChuckNorris.fact,
            price: Faker::Commerce.price,
        )
    end
end

# games = Category.create(name: "Games")
# shirts = Category.create(name: "Shirts")
# posters = Category.create(name: "Posters")

# games.items.create(name: "PokeMon", description: "Catch Em All", price: 59.99)
# shirts.items.create(name: "Hey Arnold", description: "Football Head", price: 39.99)
# posters.items.create(name: "Grateful Dead", description: "Hippies Man", price: 4.99)

puts "seeded#{Category.all.length} categories"
