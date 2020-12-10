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
#
require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
