class AddImgUrlToArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :custom_img_url, :string
  end
end
