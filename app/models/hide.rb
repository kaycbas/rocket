# == Schema Information
#
# Table name: hides
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  article_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Hide < ApplicationRecord
    validates :user_id, :article_id, presence: true
    validates :article_id, uniqueness: { scope: :user_id }

    belongs_to :user
    belongs_to :article
end
