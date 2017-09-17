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
  $('.filters-button-group').on('click', 'button', function() {
    var filterVal = $(this).attr('data-filter');

    $gallery.isotope({ filter: filterVal });
  });

  // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.isotope('layout');
    });
});
