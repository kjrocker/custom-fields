require 'test_helper'

module V1
  class FieldsControllerTest < ActionDispatch::IntegrationTest
    setup do
      @user = create(:user)
      @field = create(:field, owner: @user)
      # Only long names allowed in this club!
       @field.validations.create(owner: @user, name: "Long Names Only", options: { minimum: 8 })
      # But not too long....
       @field.validations.create(owner: @user, name: "But Not Too Long", options: { maximum: 20 })
    end

    test "should accept Tims" do
      post field_validate_url(@field), params: { value: 'Pablo Picasso' }, headers: authenticated_header(@user), as: :json
      assert_response :success
    end

    # test "should reject really long names" do
    #   post field_validate_url(@field), params: { value: 'Pablo Diego José Francisco de Paula Juan...' }, headers: authenticated_header(@user), as: :json
    #   assert_response :unprocessable_entity
    # end

    test "should reject short names" do
      post field_validate_url(@field), params: { value: 'Pablo' }, headers: authenticated_header(@user), as: :json
      assert_response :unprocessable_entity
    end
  end
end
