json.article do
    json.extract! @article, :id, :title, :author, :reading_time, :url, :full_url, :featured, :content, :description
    json.save_id @save_id
    json.favorite_id @favorite_id
    json.custom_img_url @custom_img_url
    json.cover_img url_for(@article.cover_img)
end

if @save
    json.save do
        json.extract! @save, :id, :user_id, :article_id, :archived
    end
else
    json.save ({})
end
