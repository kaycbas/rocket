# == Schema Information
#
# Table name: articles
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  content      :text             not null
#  featured     :boolean          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  author       :string
#  url          :string
#  full_url     :string           not null
#  reading_time :string
#  img_name     :string
#  description  :string
#
class Article < ApplicationRecord
    validates :title, :content, :full_url, presence: true

    has_one_attached :cover_img

    has_many :saves,
        foreign_key: :article_id,
        class_name: :Save

    has_many :savers,
        through: :saves,
        source: :user

    has_many :favorites,
        foreign_key: :article_id,
        class_name: :Favorite

    has_many :favoriters,
        through: :favorites,
        source: :user

    has_many :hides,
        foreign_key: :article_id,
        class_name: :Hide

    has_many :hiders,
        through: :hides,
        source: :user
end
