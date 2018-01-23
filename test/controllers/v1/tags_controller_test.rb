require 'test_helper'

module V1
  class TagsControllerTest < ActionDispatch::IntegrationTest
    setup do
      @user = create(:user)
      @tag = create(:tag, owner: @user)
    end

    test "should get index" do
      get tags_url, headers: authenticated_header(@user), as: :json
      assert_response :success
    end

    test "should create tag" do
      assert_difference('Tag.count') do
        post tags_url, params: { tag: attributes_for(:tag) }, headers: authenticated_header(@user), as: :json
      end
      assert_response 201
    end

    test "should show tag" do
      get tag_url(@tag), headers: authenticated_header(@user), as: :json
      assert_response :success
    end

    test "should update tag" do
      put tag_url(@tag), params: { tag: attributes_for(:tag) },
        headers: authenticated_header(@user), as: :json
      assert_response 200
    end

    test "should create association between field and tag" do
      field = @user.fields.create(name: "Field")
      assert_difference('field.tags.count', 1) do
        put tag_url(@tag), params: { tag: attributes_for(:tag, field_ids: [field.id]) },
          headers: authenticated_header(@user), as: :json
      end
      assert_response 200
    end

    test "should prevent association with other users fields" do
      field = create(:field)
      assert_difference('field.tags.count', 0) do
        put tag_url(@tag), params: { tag: attributes_for(:tag, field_ids: [field.id]) },
          headers: authenticated_header(@user), as: :json
      end
      assert_response 404
    end

    test "should destroy tag" do
      assert_difference('Tag.count', -1) do
        delete tag_url(@tag), headers: authenticated_header(@user), as: :json
      end

      assert_response 200
    end
  end
end
