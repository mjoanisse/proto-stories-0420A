var protoNavLink;
// ***
function setSelectedLinkClass() {
  var onSection = $('.chh-narrative.on');
  var onSectionId = onSection.attr('data-id');
  protoNavLink.removeClass('on');
  var matchingLink = protoNavLink.filter('[data-get-id="'+onSectionId+'"]');
  matchingLink.addClass('on');
}
function minimizePreviewBox() {
  var previewBox = $('.preview-box');
  previewBox.addClass('rev-trans').removeClass('full');
  setTimeout(() => {
    previewBox.removeClass('rev-trans');
  }, 1);
}
function enableMainScroll() {
  $('html, body').removeClass('scroll-none');
}
function disableMainScroll() {
  $('html, body').addClass('scroll-none');
}
$(document).on('keydown', function(e) {
  if (e.key == 'Escape') {
    minimizePreviewBox();
    enableMainScroll();
  }
});
$(function() {
  protoNavLink = $('.proto-nav a');
  var previewBoxButton = $('.pb-show-all-button');
  setSelectedLinkClass();
  // ***
  protoNavLink.click(function(e) {
    e.preventDefault();
    var dataId = $(this).attr('data-get-id');
    $('.chh-narrative').removeClass('on');
    var selSection = $('[data-id="'+dataId+'"]');
    // console.log(selSection);
    $('.preview-box').removeClass('on');
    selSection.addClass('on');
    selSection.find('.preview-box').addClass('on');
    setSelectedLinkClass();
  });
  previewBoxButton.mousedown(function() {
    $('.preview-box__main').addClass('on');
  }).mouseup(function() {
    disableMainScroll();
    $('.preview-box').addClass('full');
    $('.preview-box__main').removeClass('on');
  });
});