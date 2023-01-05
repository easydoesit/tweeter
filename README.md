# Tweeter Project

Tweeter is a simple, single-page Twitter clone. It is AJAX based and uses JQuery, HTML5, and CSS3. It is a student project that focuses on Front End Development.

## Features

- Responsive Layout
- Create Tweets
- 1 Click Scrolling to the top of the page
- Variety of Jquery Animations
- SCSS files included

## Getting Started


1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command (if using Nodemon) or `npm start`. The app will be served at <http://localhost:8080/>.
3. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Chance
- MD5
- body-parser

# Documentation

The following functions are used in the compose-char-count.js file:

- updateCount() | count the remaining chars available and display on screen

The following functions are used in the clients.js file:
- renderTweets(tweets) | takes in an array of Tweets and appends them to the tweets-container
- creatTweetElement(tweetObject) | createTweetElement takes a tweet object and returns <article> from it.
- loadTweets() | Loads Tweets, will first check if they are already displayed.
- escape(str) | Security - will make sure users can't inject malicious code.
- errorMessage(string) | takes a string and returns an errorbar and message.

## Final Product

!["Screenshot of Iphone Version"](https://github.com/easydoesit/tweeter/blob/master/docs/Phone.png)
!["Screenshot ofDesktop Version"](https://github.com/easydoesit/tweeter/blob/master/docs/Desktop.png)
