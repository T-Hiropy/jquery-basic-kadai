$(function(){
  // change-color
  $('#change-color').on('click', function(){
    $('#target').css('color', 'Red');
  });
 
  // change-text
  $('#change-text').on('click', function(){
    $('#target').text('Hello!');
  });

  // fade-out
  $('#fade-out').on('click', function(){
    $('#target').fadeOut();
  });

  // fade-in
  $('#fade-in').on('click', function(){
    $('#target').fadeIn();
  });

});