class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.text :content, null: false
      t.string :article_url, null: false
      t.boolean :featured, null: false

      t.timestamps
    end
    add_index :articles, :title
    add_index :articles, :article_url, unique: true
  end
end