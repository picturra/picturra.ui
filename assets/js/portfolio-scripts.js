// Gallery filter button toggles
$('.filters-button-group > .btn').click(function(){
  if (!$(this).hasClass('selected')) {
    $(this).addClass('selected').siblings().removeClass('selected');
  }
});
