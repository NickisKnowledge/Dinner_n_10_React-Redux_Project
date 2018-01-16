require 'rails_helper'

RSpec.describe Ingredient, type: :model do
  it { should belong_to(:dinner) }

  it "should validate the presence of it's name attribute" do
     should validate_presence_of(:name)
  end
end
