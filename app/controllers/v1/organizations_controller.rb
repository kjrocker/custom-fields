module V1
  class OrganizationsController < ApiController
    before_action :authenticate_user
    before_action :set_organization, only: [:update, :show, :destroy]

    def index
      render json: Organization.all
    end

    def create
      organization = Organization.build(organization_params)
      if organization.save
        render json: organization, status: :created
      else
        render json: organization.errors, status: :unprocessable_entity
      end
    end

    def update
      if @organization.update(organization_params)
        render json: @organization, status: 200
      else
        render json: @organization.errors, status: :unprocessable_entity
      end
    end

    def show
      render json: @organization
    end

    def destroy
      @organization.destroy
      render json: {}, status: :ok
    end

    private

    def set_organization
      @organization = Organization.find(params[:id])
    end

    def organization_params
      params.require(:organization).permit(:name)
    end
  end
end
