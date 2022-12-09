$(document).ready(function() {

  $('#tweet-text').focus();

  const maxCount = parseInt($('.counter').text());
 
  // count the remaining chars available and display on screen
  $('#tweet-text').keyup(function() {
    const string = $(this).val();
    const count = maxCount - string.length;
    
    $('.counter').text(count);

    if (count < 0) {
      $('.counter').css('color', 'red');
    }
  
  });

});