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

    test "should create field" do
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
      patch tag_url(@tag), params: { tag: attributes_for(:tag) },
        headers: authenticated_header(@user), as: :json
      assert_response 200
    end

    test "should destroy tag" do
      assert_difference('Tag.count', -1) do
        delete tag_url(@tag), headers: authenticated_header(@user), as: :json
      end

      assert_response 200
    end
  end
end
