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

  class LengthTest < ActiveSupport::TestCase
    setup do
      @user = create(:user)
      @length = Length.new(owner: @user, name: "Test")
    end

    test "blank options should be invalid" do
      @length.options = {}
      assert @length.invalid?
    end

    test "options should require maximum" do
      @length.options = { "maximum" => 1 }
      assert @length.valid?
    end

    test "options should require within" do
      @length.options = { "within" => 1..5 }
      assert @length.valid?
    end

    test "options should require minimum" do
      @length.options = { "minimum" => 1 }
      assert @length.valid?
    end

    test "options should require exactly" do
      @length.options = { "exactly" => 1 }
      assert @length.valid?
    end

    test "options should accept unknown attributes" do
      @length.options = { "exactly" => 1, "batman" => 2 }
      assert @length.valid?
    end

    test "options will accept combinations of attributes" do
      @length.options = { "maximum" => 4, "minimum" => 2 }
      assert @length.valid?
    end
  end
end
