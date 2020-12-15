class Api::HidesController < ApplicationController
    def create
        new_hide = {}
        new_hide[:user_id] = current_user.id
        new_hide[:article_id] = params[:article_id]
        @hide = Hide.create!(new_hide)
        render json: @hide
    end

    def destroy
        @hides = Hide.where(user_id: current_user.id);
        @hides.destroy_all
        render json: @hides
    end

    private
    def favorite_params
        params.require(:hide).permit(:user_id, :article_id)
    end
end
