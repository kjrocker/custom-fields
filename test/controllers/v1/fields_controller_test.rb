require 'test_helper'

module V1
  class FieldsControllerTest < ActionDispatch::IntegrationTest
    setup do
      @user = create(:user)
      @field = create(:field, owner: @user)
    end

    test "should get index" do
      get fields_url, headers: authenticated_header(@user), as: :json
      assert_response :success
    end

    test "should create field" do
      assert_difference('Field.count') do
        post fields_url, params: { field: attributes_for(:field) }, headers: authenticated_header(@user), as: :json
      end
      assert_response 201
    end

    test "should show field" do
      get field_url(@field), headers: authenticated_header(@user), as: :json
      assert_response :success
    end

    test "should update field" do
      patch field_url(@field), params: { field: attributes_for(:field) },
        headers: authenticated_header(@user), as: :json
      assert_response 200
    end

    test "should destroy field" do
      assert_difference('Field.count', -1) do
        delete field_url(@field), headers: authenticated_header(@user), as: :json
      end

      assert_response 200
    end
  end
end
