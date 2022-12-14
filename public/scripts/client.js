/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {
  const format = window.timeago.format;
  // Make the input the focus
  $('#tweet-text').focus();

  // renderTweetsTakes in an array of Tweets and appends them to the tweets-container
  const renderTweets = function(tweets) {
    for (let i in tweets) {
      let $tweet = createTweetElement(tweets[i]);
      $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
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
      ${format(tweetObject.created_at)}
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

  const loadTweets = function() {
    $.ajax('/tweets', {method: 'GET'})
      .then(function(data) {
        console.log("data", data);
        //$('#tweet-text').val('').focus();
        renderTweets(data);
      });
  };


  //
  $("#tweetform").on('submit', (event) => {
    event.preventDefault();
    const data = $("#tweetform").serialize();
    console.log(data);

    $.post('/tweets', data, (response) => {
      console.log('post response', response);
    });
    loadTweets();
  });


  loadTweets();
});
