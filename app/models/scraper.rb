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
    def get_article_info(full_url)
        article = {}
        html = open(full_url)
        doc = Nokogiri::HTML(html)

        article[:title] = doc.css('title').text
        article[:full_url] = full_url
        article[:url] = get_host_without_www(full_url)
        article[:content] = get_content(doc, article[:url])
        article[:reading_time] = calculate_reading_time(article[:content].length)
        article[:featured] = true
        article[:img_name] = 'placeholder.png'
        article[:description] = "This is placeholder text. This is placeholder text. 
        This is placeholder text. This is placeholder text. This is placeholder text."

        article
    end

    def get_host_without_www(full_url)
        full_url = "http://#{full_url}" if URI.parse(full_url).scheme.nil?
        host = URI.parse(full_url).host.downcase
        host.start_with?('www.') ? host[4..-1] : host
    end
    
    def get_content(doc, host)
        children = doc.at('body').children
        children.remove_attr('class')
        children.xpath('//@*').remove
        children.wrap("<div class='article-content'></div>")
        body = doc.at('body').children.to_html
    end

    
    
    def calculate_reading_time(length)
        "#{(length / 1500) + 1} min"
    end

    # Domain specific scrapers
    def pg_scraper
        
    end

    def medium_scraper

    end
end