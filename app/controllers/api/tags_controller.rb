class Api::TagsController < ApplicationController
    # before_action :require_logged_in

    def create
        @tag = Tag.create!(tag_params)
        render json: @tag
    end

    def destroy
        @tag = Tag.find_by(id: params[:id])
        @tag.destroy
        render json: @tag
    end

    private
    def tag_params
        params.require(:tag).permit(:user_id, :article_id, :label)
    end
end
