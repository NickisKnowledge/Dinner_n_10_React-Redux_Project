require 'rails_helper'

RSpec.describe Dinner, type: :model do
  it { should have_many(:directions) }
  it { should have_one(:image) }
  it { should have_many(:ingredients)}

  it "should validate the presence of it's title" do
    should validate_presence_of(:title)
  end

  it "should validate the presence of it's associated model Direction" do
    should validate_presence_of(:directions)
  end

  it "should validate the presence of it's associated model Image" do
    should validate_presence_of(:image)
  end

  it "should validate the presence of it's associated model Ingredient" do
    should validate_presence_of(:ingredients)
  end
end
