$(document).ready(function () {

  $(".choice-row").hide();

  $("#more").click(function () {
    $(".animation-fadeIn").fadeIn(2000);
    $("#more").hide();
  });

  $("#more_two").click(function () {
    $(".choice-row").fadeIn(2000);
    $("#more_two").hide();
  });

});

$(function () {
  $('#index_page').hover(function () {
    $('#index').css('background-color', '#d2e5f5');
    $('#index').css('border-radius', '3px');
    $('#index').css('padding', '10px');
  }, function () {
    // on mouseout, reset the background colour
    $('#index').css('background-color', '');
  });
});

$(function () {
  $('#Tourist-sights').hover(function () {
    $('#Tourist').css('background-color', '#d2e5f5');
    $('#Tourist').css('border-radius', '3px');
    $('#Tourist').css('padding', '10px');
  }, function () {
    // on mouseout, reset the background colour
    $('#Tourist').css('background-color', '');
  });
});

$(function () {
  $('#town-choice').hover(function () {
    $('#choise').css('background-color', '#d2e5f5');
    $('#choise').css('border-radius', '3px');
    $('#choise').css('padding', '10px');
  }, function () {
    // on mouseout, reset the background colour
    $('#choise').css('background-color', '');
  });
});

$(function () {
  $('#town-escape').hover(function () {
    $('#escape').css('background-color', '#d2e5f5');
    $('#escape').css('border-radius', '3px');
    $('#escape').css('padding', '10px');
  }, function () {
    // on mouseout, reset the background colour
    $('#escape').css('background-color', '');
  });
});

$(function () {
  $('#info-text').hover(function () {
    $('#info').css('background-color', '#d2e5f5');
    $('#info').css('border-radius', '3px');
    $('#info').css('padding', '10px');
  }, function () {
    // on mouseout, reset the background colour
    $('#info').css('background-color', '');
  });
});
