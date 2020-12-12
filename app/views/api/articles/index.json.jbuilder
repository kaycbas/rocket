# json.array! @articles do |article|
#     json.extract! article, :id, :title, :author, :reading_time, :url, :full_url, :featured
#     json.cover_img url_for(article.cover_img)
# end

@articles.each do |article|
  json.set! article.id do
    json.extract! article, :id, :title, :author, :reading_time, :url, :full_url, :featured
    json.save_id article.saves.where(user_id: current_user.id).first.id
    json.cover_img url_for(article.cover_img)
  end
end