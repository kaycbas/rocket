json.array! @articles do |article|
    json.extract! article, :id, :title, :author, :reading_time, :url, :full_url, :featured
    json.cover_img url_for(article.cover_img)
end