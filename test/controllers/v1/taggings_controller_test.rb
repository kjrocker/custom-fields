require 'test_helper'

module V1
  class TaggingsControllerTest < ActionDispatch::IntegrationTest
    setup do
      @user = create(:user)
      @field = create(:field, owner: @user)
      @tag = create(:tag, owner: @user)
    end

    test "should only create one relationship" do
      2.times do
        post taggings_url, params: { field_id: @field.id, tag_id: @tag.id }, headers: authenticated_header(@user), as: :json
        assert_response :success
      end
    end

    test "should create relationship" do
      assert_difference('@field.tags.count') do
        post taggings_url, params: { field_id: @field.id, tag_id: @tag.id }, headers: authenticated_header(@user), as: :json
      end
    end

    test "should destroy relationship" do
      post taggings_url, params: { field_id: @field.id, tag_id: @tag.id }, headers: authenticated_header(@user), as: :json
      assert_difference('@field.tags.count', -1) do
        delete taggings_url, params: { field_id: @field.id, tag_id: @tag.id }, headers: authenticated_header(@user)
      end
    end
  end
end
