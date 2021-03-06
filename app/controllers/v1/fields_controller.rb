module V1
  class FieldsController < ApiController
    before_action :authenticate_user
    before_action :set_field, only: [:update, :show, :destroy, :validate]
    before_action :authorize_user, only: [:update, :show, :destroy, :validate]
    before_action :authorize_associations, only: [:create, :update]

    def validate
      result = @field.process_value(params[:value])
      if result.is_valid?
        render json: {}, status: :ok
      else
        render json: result.errors, status: :bad_request
      end
    end

    def index
      render json: current_user.fields
    end

    def create
      field = current_user.fields.build(field_params)
      if field.save
        render json: field, status: :created
      else
        render json: field.errors, status: :bad_request
      end
    end

    def update
      if @field.update(field_params)
        render json: @field, status: 200
      else
        render json: @field.errors, status: :bad_request
      end
    end

    def show
      render json: @field, include: ['validations', 'tags']
    end

    def destroy
      @field.destroy
      render json: {}, status: :ok
    end

    private

    def set_field
      @field = Field.find(if params[:id].present? then params[:id] else params[:field_id] end)
    end

    def authorize_user
      render json: {}, status: :not_found unless @field.owner_id === current_user.id
    end

    def authorize_associations
      tag_ids = field_params[:tag_ids]
      val_ids = field_params[:validation_ids]
      if (tag_ids.present?)
        render json: {}, status: :not_found if Tag.where(id: tag_ids).pluck(:owner_id).any? { |id| id != current_user.id }
      elsif (val_ids.present?)
        render json: {}, status: :not_found if Validation.where(id: val_ids).pluck(:owner_id).any? { |id| id != current_user.id}
      end
    end

    def field_params
      params.require(:field).permit(:name, :description, :input_category, :caption, :default_value, :placeholder, validation_ids: [], tag_ids: [])
    end
  end
end
