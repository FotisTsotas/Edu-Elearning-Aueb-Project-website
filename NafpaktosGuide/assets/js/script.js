$(document).ready(function(){

  $(".choice").hide();
  $(".escape-row").hide();
  $("#info-text").hide();
  $("#footer").hide();



  $(document).scroll(function(){

  setTimeout(function() {
    $(".choice").fadeIn(2000);

  }, 2000);
  setTimeout(function() {
    $(".escape-row").fadeIn(2000);

  }, 4000);
  setTimeout(function() {
    $("#info-text").fadeIn(2000);

  }, 5000);
  setTimeout(function() {
    $("#footer").fadeIn(2000);

  }, 6000);
  });



});
