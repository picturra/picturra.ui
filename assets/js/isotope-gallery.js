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

  $('.filters-button-group').on('click', 'button', function() {
    var filterVal = $(this).attr('data-filter');
    console.log(filterVal);

    $gallery.isotope({ filter: filterVal });
  });
});
