$(document).ready(function() {
// clear the textarea on focus
  $('#tweet-text').focus(function() {
  
    $(this).val("");
  
  });

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