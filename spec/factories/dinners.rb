require 'faker'

FactoryBot.define do
  factory :dinner do
    title { Faker::Lorem.word}
  end
end
