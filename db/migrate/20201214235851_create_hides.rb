class CreateHides < ActiveRecord::Migration[5.2]
  def change
    create_table :hides do |t|
      t.integer :user_id, null: false
      t.integer :article_id, null: false

      t.timestamps
    end
    add_index :hides, [:user_id, :article_id], unique: true
    add_index :hides, :article_id
  end
end
