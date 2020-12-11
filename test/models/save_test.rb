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
require 'test_helper'

class SaveTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
