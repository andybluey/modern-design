$(document).ready(function(){

	// Expand the mobile menu when clicked
	$('.sitenav__toggle').click(function(){
		$('.sitenav__nav').toggleClass('sitenav__open');
	});

	// Animate margin of Signup button
	$("#signUp").animate({
	  marginRight: "0px"
	}, 1500);

	// Transform the background image
  // For the intro page
  $(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  console.log(scrollTop);
  var limit = 700;
    $("div.landing-page").css({
        transform: "translate(0%, " + ((scrollTop/limit)*20) + "%) translate3d(0px, 0px, 0px)"
    });
  });
  // For the about page
  $(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  console.log(scrollTop);
  var limit = 700;
    $("div.about-page").css({
        transform: "translate(0%, " + ((scrollTop/limit)*10) + "%) translate3d(0px, 0px, 0px)"
    });
  });

});
