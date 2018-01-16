class Image < ApplicationRecord
  belongs_to :dinner, optional: true

  validates_presence_of :name, :url
end
