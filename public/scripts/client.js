/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

// renderTweetsTakes in an array of Tweets and appends them to the tweets-container
const renderTweets = function(tweets) {
  for (let i in tweets) {
    let $tweet = createTweetElement(tweets[i]);
    $(document).ready(function() {
      $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    });
  }
};


// createTweetElement takes a tweet object and returns <article> from it.
const createTweetElement = function(tweetObject) {
  const fullTweet = `<article class="tweet">
    <header>
      <div class="tweet-profile">
      <img src="${tweetObject.user.avatars}" class="profile-img">
      <p class="user-name">${tweetObject.user.name}</p>
      </div>
      <div class="alias">
        ${tweetObject.user.handle}
      </div>
    </header>
    <div class="text">
    ${tweetObject.content.text}
    </div>
    <footer>
      <div class="tweet-date">
      ${tweetObject.created_at}
      </div>
      <div class="tweet-icons">
        <button><i class="fa-regular fa-flag"></i></button>
        <button><i class="fa-solid fa-retweet"></i></button> 
        <button class="likes"><i class="fa-solid fa-heart"></i><div class="like-count">1</div></button> 
      </div>
    </footer>
  </article>
`;

  return fullTweet;

};

renderTweets(data);