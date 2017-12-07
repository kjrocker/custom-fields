require 'test_helper'

module V1
  class FieldValidationsControllerTest < ActionDispatch::IntegrationTest
    setup do
      @user = create(:user)
      @field = create(:field, owner: @user)
      @validation = create(:validation, owner: @user)
    end

    test "should only create one relationship" do
      2.times do
        post field_validations_url, params: { field_id: @field.id, validation_id: @validation.id }, headers: authenticated_header(@user), as: :json
        assert_response :success
      end
    end

    test "should create relationship" do
      assert_difference('@field.validations.count') do
        post field_validations_url, params: { field_id: @field.id, validation_id: @validation.id }, headers: authenticated_header(@user), as: :json
      end
    end

    test "should destroy relationship" do
      post field_validations_url, params: { field_id: @field.id, validation_id: @validation.id }, headers: authenticated_header(@user), as: :json
      assert_difference('@field.validations.count', -1) do
        delete field_validations_url, params: { field_id: @field.id, validation_id: @validation.id }, headers: authenticated_header(@user)
      end
    end
  end
end
