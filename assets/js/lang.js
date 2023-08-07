
$(document).ready(function () {

  hideAllDescriptions('.mountain-text');
  hideAllDescriptions('.beach-text');
  hideAllDescriptions('.activs-text');

  showHideText('#mountain-image', '.mountain-text');
  showHideText('#beach-image', '.beach-text');
  showHideText('#activs-image', '.activs-text');

  CloseBtn('#CloseBtn1', '#mountain-image', '.mountain-text');
  CloseBtn('#CloseBtn2', '#beach-image', '.beach-text');
  CloseBtn('#CloseBtn3', '#activs-image', '.activs-text');

  scollTop('#CloseBtn1', '#mountain-image');
  scollTop('#CloseBtn2', '#beach-image');
  scollTop('#CloseBtn3', '#activs-image');


  scollDown('#mountain-image', '.mountain-text');
  scollDown('#beach-image', '.beach-text');
  scollDown('#activs-image', '.activs-text');

});



function hideAllDescriptions(textDiv) {
  $(textDiv).hide();

}

function showHideText(imgId, textDiv) {

  $(imgId).click(function () {
    $(this).css({ 'border': '5px solid teal' });
    $(this).addClass("animationBox");
    $(textDiv).fadeIn(2000);
  });

}

function CloseBtn(closebtn, imgId, textDiv) {

  $(closebtn).click(function () {
    $(textDiv).hide();
    $(imgId).css({ 'border': 'none' });
    $(imgId).removeClass("animationBox");

  });

}

function scollDown(imgId, textDiv) {
  $(imgId).click(function () {
    $("html, body").animate({
      scrollTop: $(textDiv).offset().top - 300
    }, 1000);
  });
}

function scollTop(closebtn, imgId) {
  $(closebtn).click(function () {
    $("html, body").animate({
      scrollTop: $(imgId).offset().top - 300
    }, 1000);

  });
}
