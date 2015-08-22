var squares = 60;
var measures = (600/squares)-1;

$(document).ready(function() {
	for (i=0;i<(squares*squares);i++) {
		$('.wrapSketch').append('<div class="square"></div>');	
	}
	$(".square").height(measures+"px");
	$(".square").width(measures+"px");

	$(".square").hover(function() {
		$(this).css("background-color","orange");
	})
})