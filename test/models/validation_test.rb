require 'test_helper'

class ValidationTest < ActiveSupport::TestCase
  setup do
    @user = create(:user)
  end

  test "requires a type" do
    assert_raise do
      create(:validation, type: '', owner: @user)
    end
  end

  test "requires a user" do
    assert_raise do
      create(:validation, owner: nil)
    end
  end
end
