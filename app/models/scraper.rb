require 'nokogiri'
require 'open-uri'
require 'pry'
require_relative 'article'

class Scraper
    def get_article_info(full_url)
        article = {}
        html = open(full_url)
        doc = Nokogiri::HTML(html)
        
        article[:title] = get_title(doc)
        article[:full_url] = full_url
        article[:custom_img_url] = get_img_url(doc)
        article[:url] = get_host_without_www(full_url)
        article[:featured] = true
        article[:img_name] = 'placeholder.png'
        article[:description] = get_description(doc)
        article[:content] = get_content(doc, article[:url])
        article[:reading_time] = calculate_reading_time(article[:content].length)

        article
    end

    def get_title(doc)
        text = doc.css('title').text
        text = text.split('|').first
        text = text.split('.').first
        text
    end

    def get_description(doc)
        description = ''
        if (doc.at('h2'))
            description = doc.at('h2').text
        elsif (doc.at('h3'))
            description = doc.at('h3').text
        elsif (doc.at('h4'))
            description = doc.at('h4').text
        else
            description = doc.at('p').text
        end
        description[0..100]
    end

    def get_img_url(doc)
        imgs = doc.css('img')
        img_url = nil;
        imgs.each do |img|
            if (img.attr('src') && 
                img.attr('src').include?('https'))
                src = img.attr('src')
                if (src.include?('/max/'))
                    idx1 = src.index('max')
                    idx1 += 4
                    idx2 = idx1
                    while (src[idx2] != '/')
                        idx2 += 1
                    end
                    size = src[idx1...idx2]
                    size = size.to_i
                    if size > 800
                        img_url = src
                        break
                    end
                elsif (img.attr('width'))
                    width = img.attr('width').to_i
                    if width > 800
                        img_url = img.attr('src') 
                        break
                    end
                else
                    img_url = img.attr('src')
                    break
                end
            end
        end
        img_url
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
        elsif (host == 'espn.com')
            return espn_scraper(doc)
        else
            return universal_scraper(doc)
        end
    end

    def calculate_reading_time(length)
        "#{(length / 1500) + 1} min"
    end

    def scrub_universal(doc)
        doc.css('nav').each do |el|
            el.children.each do |child|
                child.remove
            end
            el.remove
        end
        doc.css('header').each do |el|
            el.remove
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
        doc.css('li').each do |el|
            if el.content.strip == ""
                el.remove
            end
        end
        doc.css('iframe').each do |el|
            el.remove
        end
        doc.at('h1').remove if doc.at('h1')
        doc.at('h2').remove if doc.at('h2')
        doc.css('p').find_all{|p| all_children_are_blank?(p) }.each do |p|
            p.remove
        end
        doc
    end

    def scrub_medium(doc)
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
        # remove empty elements
        doc.css('p').find_all{|p| all_children_are_blank?(p) }.each do |p|
            p.remove
        end
        doc
    end

    def is_blank?(node)
        (node.text? && node.content.strip == '') || (node.element? && node.name == 'br')
    end

    def all_children_are_blank?(node)
        node.children.all?{|child| is_blank?(child) } 
    end

    def universal_scraper(doc)
        content = nil
        if doc.at_css('article')
            content = doc.at_css('article')
        elsif doc.at_css('main')
            content = doc.at_css('main')
        else # this code is dedicated to articles with bad css
            content = doc.at('body').children
            content.xpath('//@*').remove
            content.wrap("<div class='article-content'></div>")
            wrapped = doc.at('body').children
            scrubbed = scrub_universal(wrapped)
            return scrubbed.to_html
        end
        content.xpath('//@*').remove
        content.wrap("<div class='article-content'></div>")
        article_content = doc.at('.article-content')
        scrubbed = scrub_universal(article_content)
        html = scrubbed.to_html
        return html
    end

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
        scrubbed = scrub_medium(article_content)
        html = scrubbed.to_html
        html = remove_medium_read_time(html)
        return html
    end

    def espn_scraper(doc)
        content = doc.at_css('article.article')
        content.xpath('//@*').remove
        content.wrap("<div class='article-content'></div>")
        article_content = doc.at('.article-content')
        scrubbed = scrub_universal(article_content)
        debugger
        html = scrubbed.to_html
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
