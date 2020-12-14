module Api::ArticlesHelper
    def savedByCurrentUser?(article)
        current_user.saved_articles.include?(article)
    end
end
