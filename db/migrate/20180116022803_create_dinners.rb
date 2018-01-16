class CreateDinners < ActiveRecord::Migration[5.0]
  def change
    create_table :dinners do |t|
      t.string :title

      t.timestamps
    end
  end
end
