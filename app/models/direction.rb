class Direction < ApplicationRecord
  belongs_to :dinner

  validates_presence_of :step
end
