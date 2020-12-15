require 'nokogiri'
require 'open-uri'
require 'pry'
require_relative 'article'

# NEED
#  title        :string           not null
#  content      :text             not null
#  featured     :boolean          not null
#  author       :string
#  url          :string
#  full_url     :string           not null
#  reading_time :string
#  img_name     :string
#  description  :string

class Scraper
    

    def initialize
        
        # full_url = 'https://neilkakkar.com/sapiens.html'
        full_url = 'http://www.paulgraham.com/ecw.html'
        # full_url = 'https://a16z.com/2020/04/18/its-time-to-build/'

        article = {}
        article[:full_url] = full_url

        html = open(full_url)
        doc = Nokogiri::HTML(html)

        children = doc.at('body').children
        children.remove_attr('class')
        children.xpath('//@*').remove
        children.wrap("<div class='article-content'></div>")
        body = doc.at('body').children.to_html
        

        debugger

        article[:title] = doc.css('title').text
        article[:content] = body
        article[:reading_time] = calculate_reading_time(body.length)

        article[:url] = get_host_without_www(full_url)
        article[:featured] = true
        article[:img_name] = 'placeholder.png'
        article[:description] = "This is placeholder text. This is placeholder text. This is placeholder text. This is placeholder text. This is placeholder text."

        # article = Article.create!(article)

        # # puts article.img_name
        # img = open("https://rocket--kb-dev.s3-us-west-1.amazonaws.com/#{article.img_name}")
        # article.cover_img.attach(io: img, filename: article.img_name)
        # # binding.pry
    end

    def get_host_without_www(full_url)
        full_url = "http://#{full_url}" if URI.parse(full_url).scheme.nil?
        host = URI.parse(full_url).host.downcase
        host.start_with?('www.') ? host[4..-1] : host
    end

    def calculate_reading_time(length)
        "#{(length / 1500) + 1} min"
    end
    
end

# scrape = Scraper.new