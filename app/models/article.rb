# == Schema Information
#
# Table name: articles
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  content     :text             not null
#  article_url :string           not null
#  featured    :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Article < ApplicationRecord
    validates :title, :content, :article_url, presence: true
    validates :article_url, uniqueness: true
end
