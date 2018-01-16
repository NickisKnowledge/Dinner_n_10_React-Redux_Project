class DinnerSerializer < ActiveModel::Serializer
  attributes :id, :title, :created_at

  has_many :directions
  has_many :ingredients
  has_one :image
end
