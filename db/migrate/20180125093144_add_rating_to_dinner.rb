class AddRatingToDinner < ActiveRecord::Migration[5.0]
  def change
    add_column :dinners, :rating, :integer, default: 0
  end
end
