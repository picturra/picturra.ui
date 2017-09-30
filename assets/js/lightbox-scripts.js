// Thumbnail click handler
$('.lightbox-thumb').click(function() {
    let $clickedThumbSrc = $(this).attr('src');
    let $lightboxShown = $('.lightbox-shown');

    if ( $clickedThumbSrc !== $lightboxShown.attr('src') ) {
      $lightboxShown.removeClass('lightbox-shown');
      $('.lightbox-main').find(`[src='${$clickedThumbSrc}']`).addClass('lightbox-shown');
    };
});

// Fancybox customizations
$('[data-fancybox]').fancybox({
  buttons: [
    'fullScreen',
    'close'
  ],
  animationEffect: 'fade',
});
