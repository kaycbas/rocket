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
require 'test_helper'

class HideTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
