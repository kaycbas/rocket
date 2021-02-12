# Rocket
### [Live App](https://rocket-kb.herokuapp.com/#/)
![Logo](https://github.com/kaycbas/rocket/blob/main/app/assets/images/rocket_logo_2.png)

Rocket, a clone of [Pocket](https://getpocket.com/), is a single page app, plus chrome extension, for capturing, organizing, and reading fascnating content from around the web. It utilizes Ruby on Rails with a PostgreSQL database in the back-end, and React.js and Redux in the front-end.

![Landing](https://github.com/kaycbas/rocket/blob/main/app/assets/images/readme/landing.png)
![List](https://github.com/kaycbas/rocket/blob/main/app/assets/images/readme/list.png)

## Technologies
### Backend
- Ruby On Rails
- PostgreSQL
- Jbuilder
- Heroku
### Frontend
- React/Redux
- JavaScript
- Webpack
- npm
### Storage
- AWS S3

## Chrome Extension Setup
Currently the Chrome extension is only available via local installation on your Chrome browser (i.e. it's not available in the Chrome Web Store yet). To install the Chrome extension locally and begin using it to save articles, do the following:
1. Clone this repo to your local.
2. In Chrome, select the Extension Manager in the navbar (it should look like a puzzle piece) and click 'Manage Extensions'.
3. In the Extension Manager, click 'Load Unpacked' near the top-left.
4. In the Finder, navigate to and select the 'chrm_ext' directory in the Rocket repo you've cloned. This should upload the extension to your browser.
5. Pin the Rocket extension to your browser. Now, when you find an interesting article, simply click the Rocket icon in tge browser and the article will be saved to the Rocket app's 'Discover' section for later viewing.

## Key Features
### Saving Articles
There are three ways users can save articles for later reading:

1. Users can browse and save articles from the Discover tab. These are great articles that Rocket has chosen to feature:

![Saving Articles Method 1](https://github.com/kaycbas/rocket/blob/main/app/assets/images/readme/save_1.gif)

2. Users can click the + icon in the navbar, paste in an article URL, and click Save. This will trigger a webscraper to fetch relevant information about the article, save it to the database, and add it to the user's saved articles.

![Saving Articles Method 2](https://github.com/kaycbas/rocket/blob/main/app/assets/images/readme/save_2.gif)

3. Users can click the Rocket Chrome Extension while browsing the web and the current active page will be fetched and saved to the user's articles.

![Saving Articles Method 3](https://github.com/kaycbas/rocket/blob/main/app/assets/images/readme/save_3.gif)

The web scraping involved in saving 3rd party articles was the most challenging aspect of this feature. The basic implementation was:

- Adding an articles triggers a POST request with the article URL to the Rails backend
- An HTTP request is sent to the URL which fetches the article's HTML
- Relevant information such as title, cover image, domain, and content is parsed from the html using a gem called nokogiri
- A new article is created and saved to the db with the parsed data, then returned as the response to the frontend POST request.

Here is a snippet showing some of the content parsing for generic articles:

```ruby
class ArticleScraper
    def fetch_article_info(url)
        html = open(url)
        doc = Nokogiri::HTML(html)
        
	article = {}
	article[:full_url] = url
        article[:title] = parse_title(doc)
        article[:cover_img_url] = parse_img_url(doc)
        article[:content] = parse_content(doc)
        article[:reading_time] = calculate_reading_time(doc)
	# ...

        article
    end
	
    # ...
	
    def parse_content(doc)
        content = nil
        if doc.at_css('article')
            content = doc.at_css('article')
        elsif doc.at_css('main')
            content = doc.at_css('main')
        else
            content = doc.at('body')
        end
	# remove all html attributes
        content.xpath('//@*').remove 
	# wrap content in a class for custom styling
        content.wrap("<div class='article-content'></div>")
	# grab wrapped content
        article_content = doc.at('.article-content')
	# clean html of navbars, empty divs, and other unwanted elements
        scrubbed = scrub(article_content)
	# return prepared html
        scrubbed.to_html
    end
		
    # ...
end
```

Because different articles can have extremely different html structures, the above approach doesn't always produce good results. 

Consequently, certain domains that are saved frequently (i.e. Medium, TechCrunch, etc) have domain specific optimizations for improved content parsing. 

These domain-specific optimizations are relatively easy to add once the html structure of a domain is known and can be implemented over time based on the most popular article domains.

### Reading Mode
Articles can be opened in a reader friendly mode that eliminates distracting ads, fancy layouts, and other extraneous items.

![Reading Mode](https://github.com/kaycbas/rocket/blob/main/app/assets/images/readme/read.gif)

In order to accomplish this, article content is stored as a string of HTML in the Article database table. When an article is displayed, this HTML is parsed and added to the DOM.

The article content html is wrapped in a div with a class of 'article-content' (see code parsing snippet above). This allows article content to be automatically styled in a reader friendly format when added to the DOM.

### Managing Articles
Users have a number of options to manage articles. Specifically, they can perform the following:

- **Save** - moves an article into their **My List** section for later reading
- **Archive** - mark an article as read and move it into storage
- **Favorite** - add the article to a list of favorite articles
- **Tag** - add customizable tags to articles for filtering and organization purposes

![Managing Articless](https://github.com/kaycbas/rocket/blob/main/app/assets/images/readme/manage.gif)

### Mobile Responsive
All screens of Rocket look great on mobile. I accomplished this by designing separate CSS grid layouts for each viewport size and then switching between them via CSS media queries. On mobile, there's an unobstrusive hamburger menu for easy navigation.

![Mobile Mode](https://github.com/kaycbas/rocket/blob/main/app/assets/images/readme/mobile.gif)

## Future Feeatures
- Highlighting
- ML trained model for article scraping
