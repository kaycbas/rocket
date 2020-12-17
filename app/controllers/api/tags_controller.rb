class Api::TagsController < ApplicationController
    def create
        # new_tag = {}
        # new_tag[:user_id] = current_user.id
        # new_tag[:article_id] = params[:article_id]
        # @tag = Tag.create!(new_tag)
        debugger
        puts params
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
