// Gallery filter button toggles
$('.filters-button-group > .btn').click(function(){
  if (!$(this).hasClass('selected')) {
    $(this).addClass('selected').siblings().removeClass('selected');
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() >= ($('.profile-bio-section').outerHeight(true) - $('.filter-wrapper').height() + 5 )) {
    $('.filter-wrapper').addClass('fixed-filters')
    .width($('.container').width());
    $('.gallery-wrapper').css('margin-top', (($('.filter-wrapper').outerHeight(true) + 35 )));
  } else {
    $('.filter-wrapper').removeClass('fixed-filters')
    .width('100%');
    $('.gallery-wrapper').css('margin-top', 0);
  }
});
