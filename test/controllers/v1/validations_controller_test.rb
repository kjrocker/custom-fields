require 'test_helper'

module V1
  class ValidationsControllerTest < ActionDispatch::IntegrationTest
    setup do
      @user = create(:user)
      @validation = create(:validation, owner: @user)
    end

    test "should get index" do
      get validations_url, headers: authenticated_header(@user), as: :json
      assert_response :success
    end

    test "should create field" do
      assert_difference('Validation.count') do
        post validations_url, params: { validation: attributes_for(:validation) }, headers: authenticated_header(@user), as: :json
      end
      assert_response 201
    end

    test "should show validation" do
      get validation_url(@validation), headers: authenticated_header(@user), as: :json
      assert_response :success
    end

    test "should update validation" do
      patch validation_url(@validation), params: { validation: attributes_for(:validation) },
        headers: authenticated_header(@user), as: :json
      assert_response 200
    end

    # test "should create association between field and validation" do
    #   field = @user.fields.create(name: "Field")
    #   assert_difference('field.validations.count', 1) do
    #     put validation_url(@validation), params: { validation: attributes_for(:validation, field_ids: [field.id]) },
    #       headers: authenticated_header(@user), as: :json
    #   end
    #   assert_response 200
    # end
    #
    # test "should prevent association with other users fields" do
    #   field = create(:field)
    #   assert_difference('field.validations.count', 0) do
    #     put validation_url(@validation), params: { validation: attributes_for(:validation, field_ids: [field.id]) },
    #       headers: authenticated_header(@user), as: :json
    #   end
    #   assert_response 404
    # end

    test "should destroy validation" do
      assert_difference('Validation.count', -1) do
        delete validation_url(@validation), headers: authenticated_header(@user), as: :json
      end
      assert_response 200
    end
  end
end
