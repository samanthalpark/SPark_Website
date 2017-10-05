// Make it rain!
//sidebar button click
$('.sideBarButton').on('click', function (e) {
  e.preventDefault();

  if($(this).hasClass('active')){
  	$('.sideBarButton').removeClass('sideBarMenuOpen active').addClass('sideBarMenuClose');
  	$('.sideBarProjects').removeClass('projectTextShow');
  }
  else{ 
  	$('.sideBarButton').removeClass('sideBarMenuClose').addClass('sideBarMenuOpen active');
  	$('.sideBarProjects').addClass('projectTextShow');
  }
});

$.jInvertScroll(['.scrollContent']);