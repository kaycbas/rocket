# == Schema Information
#
# Table name: saves
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  article_id :integer          not null
#  archived   :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Save < ApplicationRecord
    validates :user_id, :article_id, presence: true
    validates :article_id, uniqueness: { scope: :user_id }

    belongs_to :user
    belongs_to :article
end
