$(document).ready(function () {
  // Initialize Isotope
  var $gallery = $('.gallery-wrapper').isotope({
    itemSelector: '.gallery-item',
    // Masonry Options
    masonry: {
      gutter: 36,
      columnWidth: '.gallery-item',
      horizontalOrder: true
    }
  });

  // Isotope filters
  $('.filter-wrapper').find('button').on('click', function() {
    var filterVal = $(this).attr('data-filter');

    $gallery.isotope({ filter: filterVal });
  });

  // layout Isotope only after images load to avoid layout errors
  $gallery.imagesLoaded().progress( function() {
    $gallery.isotope('layout');
  });
});
