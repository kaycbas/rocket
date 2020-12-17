# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  article_id :integer          not null
#  label      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tag < ApplicationRecord
    validates :user_id, :article_id, :label, presence: true
    validates :article_id, uniqueness: { scope: :user_id }

    belongs_to :user
    belongs_to :article
end
