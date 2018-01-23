module V1
  class ValidationsController < ApiController
    before_action :authenticate_user
    before_action :set_validation, only: [:update, :show, :destroy]
    before_action :authorize_user, only: [:update, :show, :destroy]
    before_action :authorize_fields, only: [:create, :update]

    def index
      render json: current_user.validations
    end

    def create
      validation = current_user.validations.build(validation_params)
      if validation.save
        render json: validation, status: :created
      else
        render json: validation.errors, status: :unprocessable_entity
      end
    end

    def update
      if @validation.update(validation_params)
        render json: @validation, status: 200
      else
        render json: @validation.errors, status: :unprocessable_entity
      end
    end

    def show
      render json: @validation
    end

    def destroy
      @validation.destroy
      render json: {}, status: :ok
    end

    private

    def set_validation
      @validation = Validation.find(params[:id])
    end

    def authorize_user
      render json: {}, status: :not_found unless @validation.owner_id === current_user.id
    end

    def authorize_fields
      field_ids = validation_params[:field_ids]
      if (field_ids.present?)
        render json: {}, status: :not_found if Field.where(id: field_ids).pluck(:owner_id).any? { |id| id != current_user.id }
      end
    end

    def validation_params
      params.require(:validation).permit(:name, :type, :options, field_ids: [])
    end
  end
end
