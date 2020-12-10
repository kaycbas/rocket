class Api::ArticlesController < ApplicationController
    def index
        @articles = Article.all
        render :index
        # render json: @articles
    end

    def show
        
    end

    def create
        
    end

    def destroy
        
    end

    private

    def article_params
        
    end
end
