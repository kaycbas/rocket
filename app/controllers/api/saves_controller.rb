class Api::SavesController < ApplicationController
    # before_action :require_logged_in
    
    def index
        @saves = Save.where(user_id: current_user.id)
        render :index
    end

    def create
        new_save = {}
        new_save[:user_id] = current_user.id
        new_save[:article_id] = params[:article_id]
        new_save[:archived] = false
        @save = Save.create!(new_save)
        render json: @save
    end

    def update
        @save = Save.find_by(id: params[:id])
        
        if @save.user == current_user && @save.update(save_params)
            render json: @save
        else
            render json: @save.errors.full_messages
        end
    end

    def destroy
        @save = Save.find_by(id: params[:id])
        @save.archived = false
        @save.destroy
        render json: @save
    end

    private
    def save_params
        params.require(:save).permit(:user_id, :article_id, :archived)
    end
end
