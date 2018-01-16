class Dinner < ApplicationRecord
  has_many :ingredients
  has_many :directions
  has_one :image

  validates_presence_of :title, :image, :ingredients, :directions
end
