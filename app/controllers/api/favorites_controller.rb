class Api::FavoritesController < ApplicationController
    def create
        new_fav = {}
        new_fav[:user_id] = current_user.id
        new_fav[:article_id] = params[:article_id]
        @favorite = Favorite.create!(new_fav)
        render json: @favorite
    end

    def destroy
        @favorite = Favorite.find_by(id: params[:id])
        @favorite.destroy
        render json: @favorite
    end

    private
    def favorite_params
        params.require(:favorite).permit(:user_id, :article_id)
    end
end
