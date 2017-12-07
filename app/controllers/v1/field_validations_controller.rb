module V1
  class FieldValidationsController < ApiController
    before_action :authenticate_user
    before_action :set_field
    before_action :set_validation
    before_action :authorize_user

    def create
      tagging = FieldValidation.find_or_initialize_by(field_validation_params)
      if tagging.save
        render json: tagging, status: :created
      else
        render json: tagging.errors, status: :unprocessable_entity
      end
    end

    def destroy
      FieldValidation.find_by(field_id: params[:field_id], validation_id: params[:validation_id]).destroy
      render json: {}, status: :ok
    end

    private

    def set_field
      @field = Field.find(params[:field_id])
    end

    def set_validation
      @validation = Validation.find(params[:validation_id])
    end

    def authorize_user
      render json: {}, status: :not_found unless @field.owner_id == current_user.id && @validation.owner_id == current_user.id
    end

    def field_validation_params
      params.require(:field_validation).permit(:field_id, :validation_id)
    end
  end
end
