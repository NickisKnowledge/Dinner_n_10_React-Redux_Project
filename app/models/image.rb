class Image < ApplicationRecord
  belongs_to :dinner

  validates_presence_of :name, :url
end
