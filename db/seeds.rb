# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require_relative 'seed_data.rb'

User.destroy_all
Article.destroy_all

User.create!(username: "demo", email: "demo@email.com", password: "apple123")
Article.create!(SeedData::ARTICLES);

Article.all.each_with_index do |article|
    file = open("https://rocket--kb-dev.s3-us-west-1.amazonaws.com/#{article.img_name}")
    article.cover_img.attach(io: file, filename: article.img_name)
end