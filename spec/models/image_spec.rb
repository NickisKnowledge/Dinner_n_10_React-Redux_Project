require 'rails_helper'

RSpec.describe Image, type: :model do
  it { should belong_to(:dinner) }

  it "should validate the presence of it's name attribute" do
    should validate_presence_of(:name)
  end

  it "should validate the presence of it's url attribute" do
    should validate_presence_of(:url)
  end
end
