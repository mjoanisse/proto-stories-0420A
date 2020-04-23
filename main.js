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
  enableMainScroll();
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
  }
});
$(document).on('click', function(e) {
  var eventTarget = $(e.target);
  // If "modal" not open, return.
  if ($('.preview-box.full').length < 1) return;
  // Traverse event target ancestors and see if the preview box is present.
  // If it's not, we know the click lies somewhere outside the preview box.
  // In which case = .. we minimize our preview box.
  if (!eventTarget.closest('.preview-box').length) {
    minimizePreviewBox();
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