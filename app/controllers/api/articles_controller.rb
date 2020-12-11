class Api::ArticlesController < ApplicationController
    def index
        @articles = Article.all
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
