require 'test_helper'

class ValidationTest < ActiveSupport::TestCase
  setup do
    @user = create(:user)
    @validation = create(:validation, owner: @user)
  end

  test "when testing" do
    assert @validation.owner == @user
  end
end
