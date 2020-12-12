class Api::ArticlesController < ApplicationController
    def index
        if params[:featured]
            @articles = Article.where(featured: true)
        elsif params[:archived]
            @articles = current_user.archived_articles
        else 
            # @articles = Article.where(featured: true)
            # debugger
            @articles = current_user.saved_articles
            # @articles = Article.all # TODO: remove
        end
        render :index
    end

    def show
        @article = Article.find_by(id: params[:id])
        render :show
    end

    def create
        
    end

    def destroy
        
    end

    private

    def article_params
        params.require(
                :article
            ).permit(
                :title, 
                :content, 
                :featured, 
                :author, 
                :url, 
                :full_url, 
                :reading_time
            )
    end
end
