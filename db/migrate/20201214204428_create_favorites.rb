class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :article_id, null: false

      t.timestamps
    end
    add_index :favorites, [:user_id, :article_id], unique: true
    add_index :favorites, :article_id
  end
end
