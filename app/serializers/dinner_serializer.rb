class DinnerSerializer < ActiveModel::Serializer
  attributes :id, :title, :rating, :created_at

  has_many :directions
  has_many :ingredients
  has_one :image
end
