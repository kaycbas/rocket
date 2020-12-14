json.article do
    json.extract! @article, :id, :title, :author, :reading_time, :url, :full_url, :featured, :content
    json.save_id @save_id
    json.cover_img url_for(@article.cover_img)
end

if @save
    json.save do
        json.extract! @save, :id, :user_id, :article_id, :archived
    end
else
    json.save ({})
end
