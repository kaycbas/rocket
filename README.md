
### [Live App](https://rocket-kb.herokuapp.com/#/)
<br>
Rocket, a clone of [Pocket](https://getpocket.com/), is a single page app, plus a supplementary chrome extension, for capturing, organizing, and reading fascnating content from around the web. It utilizes Ruby on Rails with a PostgreSQL database in the back-end, and React.js and Redux in the front-end.


<br>
<img src="https://github.com/kaycbas/rocket/blob/main/app/assets/images/readme/landing_screenshot.jpg" width="800">
<img src="https://github.com/kaycbas/rocket/blob/main/app/assets/images/readme/home_screenshot.jpg" width="800">

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

## Key Features
### User Auth
- Users can sign up or log in to use the application
- Users can also log in through a demo account
- User credentials are securely hashed, salted, and stored as a password digest
### Saving Articles
There are three ways users can save articles:
1. Users can browse and save featured articles in the 'Discover' tab.
2. Users can paste the URL of an article into the 'Add Bar' and click 'Save'. This will fetch the article data from the 3rd party website (including metadata, imgage, and content) and save it to the User's 'My List' tab.
![Saving Articles via Add Bar](https://github.com/kaycbas/rocket/blob/main/app/assets/images/readme/article_save.gif)
3. Users can click the Rocket Chrome Extension while browsing the web and the current active page will be fetched by Rocket and saved to the user's List.
![Saving Articles via Add Bar](https://github.com/kaycbas/rocket/blob/main/app/assets/images/readme/article_save_chrm.gif)

### Reading Mode

### Managing Articles

