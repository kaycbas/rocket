@saves.each do |save|
  json.set! save.id do
    json.extract! save, :user_id, :article_id, :archived
  end
end