$(function() {
  var protoNavLink = $('.proto-nav a');
  var previewBoxButton = $('.pb-show-all-button');
  // ***
  protoNavLink.click(function(e) {
    e.preventDefault();
    var dataId = $(this).attr('data-get-id');
    $('.chh-narrative').removeClass('on');
    var selSection = $('[data-id="'+dataId+'"]');
    $('.preview-box').removeClass('on');
    selSection.addClass('on');
    selSection.find('.preview-box').addClass('on');
  });
  previewBoxButton.mousedown(function() {
    $('.preview-box__main').addClass('on');
  }).mouseup(function() {
    $('.preview-box__main').removeClass('on');
  });
});