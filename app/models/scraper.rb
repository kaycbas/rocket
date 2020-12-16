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

        article[:title] = doc.css('title').text.split('|').first
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
        if (host == 'paulgraham.com')
            return pg_scraper(doc)
        elsif (host.last(10) == 'medium.com')
            return medium_scraper(doc)
        else
            children = doc.at('body').children
            children.remove_attr('class')
            children.xpath('//@*').remove
            children.wrap("<div class='article-content'></div>")
            return doc.at('body').children.to_html
        end
    end

    def calculate_reading_time(length)
        "#{(length / 1500) + 1} min"
    end

    def scrub(doc)
        doc.css('p').find_all{|p| all_children_are_blank?(p) }.each do |p|
            p.remove
        end
        doc.css('svg').each do |el|
            el.remove
        end
        doc.css('figcaption').each do |el|
            el.remove
        end
        doc.css('button').each do |el|
            el.remove
        end
        doc.css('a').each do |el|
            el.remove
        end
        doc.at('h1').remove if doc.at('h1')
        doc.at('h2').remove if doc.at('h2')
        doc
    end

    def is_blank?(node)
        (node.text? && node.content.strip == '') || (node.element? && node.name == 'br')
    end

    def all_children_are_blank?(node)
        node.children.all?{|child| is_blank?(child) } 
        # Here you see the convenience of monkeypatching... sometimes.
    end

    # Domain specific scrapers
    def pg_scraper(doc)
        content = doc.at('font')
        content.xpath('//@*').remove
        content.wrap("<div class='article-content'></div>")
        doc.at('.article-content').to_html
    end

    def medium_scraper(doc)
        content = doc.at_css('article')
        content.xpath('//@*').remove
        content.wrap("<div class='article-content'></div>")
        article_content = doc.at('.article-content')
        scrubbed = scrub(article_content)
        html = scrubbed.to_html
        html = remove_medium_read_time(html)
        # html.slice!('min read')
        # i = html.index('min read')
        # html = html[0...(i-5)] + html[(i+8)..-1]
        # * 10 min read
        # html.slice!(/· (\d)+ min read/)
        return html
    end

    def remove_medium_read_time(str)
        if (str.include?('min read'))
            idx1 = str.index('->·<!')
            idx1 += 2
            idx2 = str.index('min read')
            idx2 += 7
            sub = str[idx1..idx2]
            str.slice!(sub)
        end
        str
    end

end

# · (\d)+ min read