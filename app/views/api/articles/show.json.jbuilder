json.extract! @article, :id, :title, :author, :reading_time, :url, :full_url, :featured, :content
json.cover_img url_for(@article.cover_img)

