class AddDescToArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :description, :string
  end
end
