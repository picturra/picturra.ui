$(document).ready(function () {
  // Initialize Isotope
  $('.gallery-wrapper').isotope({
    itemSelector: '.gallery-item',
    // Masonry Options
    masonry: {
      gutter: 36,
      columnWidth: '.gallery-item',
      horizontalOrder: true
    }
  })
});
