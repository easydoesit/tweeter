$(document).ready(function() {
  const maxCount = 140;
  const $textArea = $("#tweet-text");

  // count the remaining chars available and display on screen

  const updateCount = function() {
    const string = $(this).val();
    const count = maxCount - string.length;

    const counter = $(this).next().children().last();
    counter.text(count);

    if (count < 0) {
      $(counter).addClass("red-text");
    } else {
      $(counter).removeClass("red-text");
    }
  };

  $textArea.on("input", updateCount);

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

  $(window).scroll(function() {
    $(".nav-right").addClass("display-none");
    $(".scroll-button").removeClass("display-none");
  });


  $(".scroll-button").click(function() {
    $("html").animate({
      scrollTop: 0
    }, 1000, function() {
      $(".new-tweet").slideDown("slow");
      $("#tweet-text").focus();
      $(".scroll-button").addClass("display-none");
      $(".nav-right").removeClass("display-none");
    });
  });

});
