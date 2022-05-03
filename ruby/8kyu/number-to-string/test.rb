require './index.rb'

RSpec.describe "Example" do
  it "should return the sum" do
    expect(number_to_string(67)).to eq('67'), "failure message"
  end

  it "another example" do
    expect(number_to_string(40)).to eq('40'), "failure message"
  end
end