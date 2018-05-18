module V1
  class MembershipsController < ApiController
    before_action :authenticate_user
    before_action :set_membership, only: [:destroy]

    def create
      membership = Membership.build(membership_params)
      if membership.save
        render json: membership, status: :created
      else
        render json: membership.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @membership.destroy
      render json: {}, status: :ok
    end

    private

    def set_membership
      @membership = membership.find(params[:id])
    end

    def membership_params
      params.require(:membership).permit(:user_id, :organization_id)
    end
  end
end
