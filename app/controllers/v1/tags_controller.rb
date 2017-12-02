module V1
  class TagsController < ApiController
    before_action :authenticate_user
    before_action :authorize_user, only: [:update, :show, :destroy]
    before_action :set_tag, only: [:update, :show, :destroy]

    def index
      render json: current_user.tags
    end

    def create
      tag = current_user.tags.build(tag_params)
      if tag.save
        render json: tag, status: :created
      else
        render json: tag.errors, status: :unprocessable_entity
      end
    end

    def update
      if @tag.update(tag_params)
        render json: @tag, status: 200
      else
        render json: @tag.errors, status: :unprocessable_entity
      end
    end

    def show
      render json: @tag
    end

    def destroy
      @tag.destroy
      render json: {}, status: :ok
    end

    private

    def set_tag
      @tag = Tags.find(params[:id])
    end

    def authorize_user
      render json: {}, status: :not_found unless tag.owner_id === current_user.id
    end

    def user_params
      params.require(:tag).permit(:name)
    end
  end
end
