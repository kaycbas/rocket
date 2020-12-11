class CreateSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :saves do |t|
      t.integer :user_id, null: false
      t.integer :article_id, null: false
      t.boolean :archived, null: false

      t.timestamps
    end
    add_index :saves, [:user_id, :article_id], unique: true
    add_index :saves, :article_id
  end
end
