$(document).ready(function(){

	// Expand the mobile menu when clicked
	$('.sitenav__toggle').click(function(){
		$('.sitenav__nav').toggleClass('sitenav__open');
	});

	// Animate margin of Signup button
	$("#signUp").animate({
	  marginRight: "0px"
	}, 1000);

});
