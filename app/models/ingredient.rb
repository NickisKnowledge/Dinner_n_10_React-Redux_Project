class Ingredient < ApplicationRecord
  belongs_to :dinner, optional: true

  validates_presence_of :name
end
