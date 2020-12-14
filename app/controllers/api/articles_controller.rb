class Api::ArticlesController < ApplicationController
    def index
        @saves = current_user.saves
        @filter = params[:filter]
        if @filter == 'featured'
            @articles = Article.where(featured: true)
            @articles = @articles.reject { |article| article.savers.include?(current_user) }
        elsif @filter == 'archived'
            @articles = current_user.archived_articles
        elsif @filter == 'list'
            @articles = current_user.listed_articles
        elsif @filter== 'favorites'
            @articles = current_user.favorite_articles
        end
        render :index
    end

    def show
        @article = Article.find_by(id: params[:id])
        @save = @article.saves.find_by(user_id: current_user.id)
        @save_id = @save ? @save.id : nil
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
