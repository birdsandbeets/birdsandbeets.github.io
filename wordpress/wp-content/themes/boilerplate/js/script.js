/*
	Any site-specific scripts you might have.
	Note that <html> innately gets a class of "no-js".
	This is to allow you to react to non-JS users.
	Recommend removing that and adding "js" as one of the first things your script does.
	This will do it:
	document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
	* Note that if you are using Modernizr, it already does this for you. :-)
*/


$(document).ready(function(){
    $(".single").hide(0).delay(500).fadeIn(500)
    $(".diptych").hide(0).delay(500).fadeIn(500)
});

$(document).ready(function() {
  $('.button').on('click', function() {
    $('#header').toggleClass('isOpenMenu');
    $('.button').toggleClass('isOpenButton').fadeIn(500);
  });
});

$(document).ready(function() {
  $('.gridbutton').on('click', function() {
    $('.cycle-slideshow').toggleClass('cycle-slideshow-toggle');
    $('#custom-caption').toggleClass('custom-caption-toggle');
    $('.slide-nav').toggleClass('slide-nav-toggle');
    $('.grid').toggleClass('grid-toggle');
  });
});


$(document).ready(function() {
	$( ".grid ul" ).click(function() {
  // `this` is the DOM element that was clicked
  var index = $( ".grid ul" ).index( this );
  $('.cycle-slideshow').cycle('goto', index);
  $('.cycle-slideshow').toggleClass('cycle-slideshow-toggle');
    $('#custom-caption').toggleClass('custom-caption-toggle');
    $('.slide-nav').toggleClass('slide-nav-toggle');
    $('.grid').toggleClass('grid-toggle');
  	
});
});

/*
$(document).ready(function() {
	var $single_width = $('.cycle-slideshow').width();
	console.log($single_width);
		$('.cycle-slideshow .single li img').css( 'width' , $single_width );
});

$( window ).resize(function() {
	var $single_width = $('.cycle-slideshow').width();
	console.log($single_width);
		$('.cycle-slideshow .single li img').css( 'width' , $single_width );
});
*/
