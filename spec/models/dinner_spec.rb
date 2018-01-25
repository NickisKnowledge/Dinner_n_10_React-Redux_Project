require 'rails_helper'

RSpec.describe Dinner, type: :model do
  it { expect have_many(:directions) }
  it { expect have_one(:image) }
  it { expect have_many(:ingredients)}

  it "should validate the presence of it's title attribute" do
    expect validate_presence_of(:title)
  end

  it "it's rating attribute, shuold be set to zero" do
    dinner = FactoryBot.build(:dinner)
    expect dinner.rating == 0
  end

  it "should validate the presence of it's associated model Direction" do
    expect validate_presence_of(:directions)
  end

  it "should validate the presence of it's associated model Image" do
    expect validate_presence_of(:image)
  end

  it "should validate the presence of it's associated model Ingredient" do
    expect validate_presence_of(:ingredients)
  end
end
