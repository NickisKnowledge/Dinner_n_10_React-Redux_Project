class Ingredient < ApplicationRecord
  belongs_to :dinner

  validates_presence_of :name
end
