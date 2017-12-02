module V1
  class FieldsController < ApiController
    before_action :authenticate_user
    before_action :authorize_user, only: [:update, :show, :destroy]
    before_action :set_field, only: [:update, :show, :destroy]

    def index
      render json: current_user.fields
    end

    def create
      field = current_user.fields.build(field_params)
      if field.save
        render json: field, status: :created
      else
        render json: field.errors, status: :unprocessable_entity
      end
    end

    def update
      if @field.update(field_params)
        render json: @field, status: 200
      else
        render json: @field.errors, status: :unprocessable_entity
      end
    end

    def show
      render json: @field
    end

    def destroy
      @field.destroy
      render json: {}, status: :ok
    end

    private

    def set_field
      @field = Fields.find(params[:id])
    end

    def authorize_user
      render json: {}, status: :not_found unless field.owner_id === current_user.id
    end

    def user_params
      params.require(:field).permit(:key, :label)
    end
  end
end
