class Direction < ApplicationRecord
  belongs_to :dinner, optional: true

  validates_presence_of :step
end
