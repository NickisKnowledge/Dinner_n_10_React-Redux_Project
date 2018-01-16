class Dinner < ApplicationRecord
  has_many :ingredients
  has_many :directions
  has_one :image

  accepts_nested_attributes_for :image, :allow_destroy => true
  accepts_nested_attributes_for :ingredients, :allow_destroy => true
  accepts_nested_attributes_for :directions, :allow_destroy => true

  validates_presence_of :title, :image, :ingredients, :directions
end
