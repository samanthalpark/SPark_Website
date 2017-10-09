// Make it rain!
//horizontal scroll
$.jInvertScroll(['main']);

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

//click picture
$('.project').on('click', function(){
	if ($(this).children('img').hasClass('imageLargeSize')){
		$(this).children('img').removeClass('imageLargeSize').addClass('imageSmallSize');
		$('main').css('width', '-=452px');
	}
	else{
		$(this).children('img').removeClass('imageSmallSize').addClass('imageLargeSize');
		$('main').css('width', '+=452px');
	}
});