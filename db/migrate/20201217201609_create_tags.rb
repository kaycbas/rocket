class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.integer :user_id, null: false
      t.integer :article_id, null: false
      t.string :label, null: false

      t.timestamps
    end
    add_index :tags, [:user_id, :article_id], unique: true
    add_index :tags, :article_id
  end
end
