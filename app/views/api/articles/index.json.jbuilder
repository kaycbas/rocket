# json.array! @articles do |article|
#     json.extract! article, :id, :title, :author, :reading_time, :url, :full_url, :featured
#     json.cover_img url_for(article.cover_img)
# end

json.articles do 
  @articles.each do |article|
    json.set! article.id do
      json.extract! article, :id, :title, :author, :reading_time, :url, :full_url, :featured
      json.save_id article.saves.where(user_id: current_user.id).ids.first
      json.cover_img url_for(article.cover_img)
      json.filter @filter
    end
  end
end

json.saves do 
  @saves.each do |save|
    json.set! save.id do
      json.extract! save, :id, :user_id, :article_id, :archived
    end
  end
end