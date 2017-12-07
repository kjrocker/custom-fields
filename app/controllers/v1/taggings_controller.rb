module V1
  class TaggingsController < ApiController
    before_action :authenticate_user
    before_action :set_field
    before_action :set_tag
    before_action :authorize_user

    def create
      tagging = Tagging.find_or_initialize_by(tagging_params)
      if tagging.save
        render json: tagging, status: :created
      else
        render json: tagging.errors, status: :unprocessable_entity
      end
    end

    def destroy
      Tagging.find_by(field_id: params[:field_id], tag_id: params[:tag_id]).destroy
      render json: {}, status: :ok
    end

    private

    def set_field
      @field = Field.find(params[:field_id])
    end

    def set_tag
      @tag = Tag.find(params[:tag_id])
    end

    def authorize_user
      render json: {}, status: :not_found unless @field.owner_id == current_user.id && @tag.owner_id == current_user.id
    end

    def tagging_params
      params.require(:tagging).permit(:field_id, :tag_id)
    end
  end
end
