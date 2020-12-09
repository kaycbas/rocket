# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'open-uri'

# demo_user = User.create(username: "Andy2", email: "andy2@email.com", password: "password2")

# file = open('https://rocket--kb-dev.s3-us-west-1.amazonaws.com/dancer.jpg')

# demo_user.photo.attach(io: file, filename: 'dancer.jpg')

demo_user = User.create(username: "demo", email: "demo@email.com", password: "apple123")