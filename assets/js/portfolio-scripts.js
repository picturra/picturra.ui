// Gallery filter button toggles
$('.filter-wrapper').find('button').click(function(){
  if (!$(this).hasClass('selected')) {
    $('.filter-wrapper').find('button').removeClass('selected');
    $(this).addClass('selected');
  }
});

// Follow and Top fixed buttons
$(window).scroll(function() {
  if ($(window).scrollTop() >= ($('.profile-bio-section').outerHeight(true) - $('.filter-wrapper').height() + 5 )) {
    $('.small-follow-btn').addClass('fixed-small-follow-btn');
    $('.top-btn').addClass('fixed-top-btn');
  }

  else {
    $('.small-follow-btn').removeClass('fixed-small-follow-btn');
    $('.top-btn').removeClass('fixed-top-btn');
  }
});

// Smooth scroll to top
$('.top-btn').click(function() {
  $('html, body').animate({scrollTop: 0},600);
});

$('.filter-wrapper button').click(function() {
  let $top = $('.profile-bio-section').outerHeight(true);
  $('html, body').animate({scrollTop: $top - 55},600);
});
