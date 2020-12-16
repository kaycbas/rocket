class AllowDuplicateUrl < ActiveRecord::Migration[5.2]
  def change
    remove_index :articles, :full_url
  end
end
