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

    # test "should create association between field and tag" do
    #   tag = @user.tags.create(name: "Tag")
    #   assert_difference('@field.tags.count',1) do
    #     put field_url(@field), params: { field: attributes_for(:field, tag_ids: [tag.id])}, headers: authenticated_header(@user), as: :json
    #   end
    #   assert_response 200
    # end
    #
    # test "should create association between field and validation" do
    #   validation = @user.validations.create(name: "Validation", type: "Required")
    #   assert_difference('@field.validations.count',1) do
    #     put field_url(@field), params: { field: attributes_for(:field, validation_ids: [validation.id])}, headers: authenticated_header(@user), as: :json
    #   end
    #   assert_response 200
    # end
    #
    # test "should prevent association with other users tags" do
    #   tag = create(:tag)
    #   assert_difference('@field.tags.count',0) do
    #     put field_url(@field), params: { field: attributes_for(:field, tag_ids: [tag.id])}, headers: authenticated_header(@user), as: :json
    #   end
    #   assert_response 404
    # end
    #
    # test "should prevent association with other users validations" do
    #   validation = create(:validation)
    #   assert_difference('@field.validations.count', 0) do
    #     put field_url(@field), params: { field: attributes_for(:field, validation_ids: [validation.id])}, headers: authenticated_header(@user), as: :json
    #   end
    #   assert_response 404
    # end

    test "should destroy field" do
      assert_difference('Field.count', -1) do
        delete field_url(@field), headers: authenticated_header(@user), as: :json
      end
      assert_response 200
    end
  end
end
