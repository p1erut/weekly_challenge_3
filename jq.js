$(document).ready(function() { 

	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top - 95
			}, 1000);
		}
	});

	$("#home").mouseover(function() {
		$("#menu1").addClass("color_after").fadeIn(200);
	});
	$("#home").mouseout(function() {
		$("#menu1").removeClass("color_after");
	});

	$("#about").mouseover(function() {
		$("#menu2").addClass("color_after");
	});
	$("#about").mouseout(function() {
		$("#menu2").removeClass("color_after");
	});

	$("#blog").mouseover(function() {
		$("#menu3").addClass("color_after");
	});
	$("#blog").mouseout(function() {
		$("#menu3").removeClass("color_after");
	});

	$("#portfolio").mouseover(function() {
		$("#menu4").addClass("color_after");
	});
	$("#portfolio").mouseout(function() {
		$("#menu4").removeClass("color_after");
	});

	$("#contact").mouseover(function() {
		$("#menu5").addClass("color_after");
	});
	$("#contact").mouseout(function() {
		$("#menu5").removeClass("color_after");
	});

});