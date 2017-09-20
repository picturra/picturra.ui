// Gallery filter button toggles
$('.filters-button-group > .btn').click(function(){
  if (!$(this).hasClass('selected')) {
    $(this).addClass('selected').siblings().removeClass('selected');
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() >= ($('.profile-bio-section').outerHeight(true) - $('.filter-wrapper').height() + 5 )) {
    $('.follow-btn').addClass('fixed-follow-btn');
    $('.top-btn').addClass('fixed-top-btn');

    $('.filter-wrapper').addClass('fixed-filters')
    .width($('.container').width());
    $('.gallery-wrapper').css('margin-top', (($('.filter-wrapper').outerHeight(true) + 35 )));
  } else {
    $('.filter-wrapper').removeClass('fixed-filters')
    .width('100%');

    $('.gallery-wrapper').css('margin-top', 0);

    $('.top-btn').removeClass('fixed-top-btn');
  }
});

$(window).resize(function() {
  $('.fixed-filters').width($('.container').width());
});

$('.top-btn').click(function() {
  $('html,body').animate({scrollTop: 0},600);
});
