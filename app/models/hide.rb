class Hide < ApplicationRecord
    validates :user_id, :article_id, presence: true
    validates :article_id, uniqueness: { scope: :user_id }

    belongs_to :user
    belongs_to :article
end
