class Api::ArticlesController < ApplicationController
    def index
        @saves = Save.all
        @filter = params[:filter]
        if @filter == 'featured'
            @articles = Article.where(featured: true)
            @articles = @articles.reject { |article| article.savers.include?(current_user) }
        elsif @filter == 'archived'
            @articles = current_user.archived_articles
        else 
            @articles = current_user.saved_articles
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
