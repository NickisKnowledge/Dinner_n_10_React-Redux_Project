require 'rails_helper'

RSpec.describe Direction, type: :model do
  it { should belong_to(:dinner) }
  
  it "should validate the presence of it's step attribute" do
     should validate_presence_of(:step)
  end
end
