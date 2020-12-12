json.extract! @article, :id, :title, :author, :reading_time, :url, :full_url, :featured, :content
json.save_id article.saves.where(user_id: current_user.id).first.id
json.cover_img url_for(@article.cover_img)

