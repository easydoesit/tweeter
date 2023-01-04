/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {
  const format = window.timeago.format;

  // renderTweetsTakes in an array of Tweets and appends them to the tweets-container
  const renderTweets = function(tweets) {
    console.log("tweets", tweets);
    for (let i in tweets) {
      let $tweet = createTweetElement(tweets[i]);
      $("#tweets-container").append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    }
  };

  // createTweetElement takes a tweet object and returns <article> from it.
  const createTweetElement = function(tweetObject) {
    const safeHTML = `<div class="text">${escape(tweetObject.content.text)}</div>`;
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
    ${safeHTML}
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
    $.ajax("/tweets", { method: "GET" }).then(function(data) {
      $("#tweet-text").val("").focus();
      $(".errobar").remove();
      console.log(data);
      const numTweets = $("article.tweet").length;
      console.log(numTweets);
      if (!$("article.tweet").length) {
      
        renderTweets(data);
      
      } else {
        const lastTweet = [];
        lastTweet.push(data[numTweets]);

        renderTweets(lastTweet);
      }
    
    });
  };

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // submit a tweet
  $("#tweetform").on("submit", (event) => {
    event.preventDefault();
    const formData = $("#tweetform").serialize();
    const $textArea = $("#tweet-text");
    let $string = $textArea.val();

    if ($string.length > 140) {
      const errorPlace = $("#tweetform label:first-child");
      return errorPlace.after(errorMessage("Please shorten your post."));
    }

    if (!$string) {
      const errorPlace = $("#tweetform label:first-child");
      return errorPlace.after(errorMessage("Please enter text below."));
    }

    $.post("/tweets", formData, () => {
      if ($(".errorbar").length) {
        $(".errorbar").remove();
      }
      loadTweets();
    });

  });
  
  // errorMessage takes a string and a DOM element(where to place it) and returns an errorbar.
  const errorMessage = function(string) {
    const fullError = `<div class="errorbar">${string}</div>`;

    return fullError;
  };


  $(".new-tweet-button").mouseenter(function() {
    $(this).children().animate({
      paddingTop: "0.4em"
    }, 500);
  });
  $(".new-tweet-button").mouseout(function() {
    $(this).children().animate({
      paddingTop: "0em"
    }, 500);
  });

  $(".new-tweet-button").click(function() {
    $(".new-tweet").slideDown("slow");
    $("#tweet-text").focus();
  });

  loadTweets();
});