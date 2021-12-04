# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

prevCats = Category.all.length
prevJobs = Job.all.length
Category.destroy_all
Job.destroy_all

puts "#{prevCats} categories cleared"
puts "#{prevJobs} jobs cleared"

item_names = [Faker::Commerce.product_name, Faker::Game.title, Faker::Movie.title]
item_prefix = ["Retro", "Groovy", "'70's", "'80's", "Hip", "Vintage"]


10.times do 
    category = Category.create(name: Faker::Commerce.department)
    10.times do
        name = item_prefix + " " + item_names.sample
        category.items.create(
            name: item_names.sample,
            description: Faker::ChuckNorris.fact,
            price: Faker::Commerce.price,
        )
    end
end

10.times do 
    Job.create(
        title: Faker::Company.profession,
        company: Faker::Company.name,
        salary: rand(10000...100000),
    )
end

# games = Category.create(name: "Games")
# shirts = Category.create(name: "Shirts")
# posters = Category.create(name: "Posters")

# games.items.create(name: "PokeMon", description: "Catch Em All", price: 59.99)
# shirts.items.create(name: "Hey Arnold", description: "Football Head", price: 39.99)
# posters.items.create(name: "Grateful Dead", description: "Hippies Man", price: 4.99)

puts "seeded#{Category.all.length} categories"
puts "seeded #{Job.all.length} jobs"
