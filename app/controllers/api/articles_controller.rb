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
        @articles = @articles - current_user.hidden_articles
        render :index
    end

    def show
        @article = Article.find_by(id: params[:id])
        @save = @article.saves.find_by(user_id: current_user.id)
        @fav = @article.favorites.find_by(user_id: current_user.id)
        @save_id = @save ? @save.id : nil
        @favorite_id = @fav ? @fav.id : nil
        render :show
    end

    def create
        scraper = Scraper.new
        article_info = scraper.get_article_info(params[:url])

        @article = Article.create!(article_info)
        img = open("https://rocket--kb-dev.s3-us-west-1.amazonaws.com/#{@article.img_name}")
        @article.cover_img.attach(io: img, filename: @article.img_name)
        render :show
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
