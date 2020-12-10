class AddAuthorToArticles < ActiveRecord::Migration[5.2]
  def change
    remove_column :articles, :article_url, :string
    add_column :articles, :author, :string
    add_column :articles, :url, :string
    add_column :articles, :full_url, :string, null: false
    add_column :articles, :reading_time, :string
    add_index :articles, :full_url, unique: true
  end
end
