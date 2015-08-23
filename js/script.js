//When clicking 'Clear' button, user is asked to neter number of boxes and createGrid function is called
$(document).ready(function() {
	$('button').click(function() {
		//Ask user number of boxes
		var boxes = prompt("How many boxes per line?", 50);
		//Assigns a value if user doesn't enter any in prompt
		if(!boxes) {
 			boxes = 50;
 		};
 		var butValue =  $(this).val();
 		//Call createGrid function
		createGrid(boxes,butValue);
	})
})

//createGrid function. Takes num of boxes and type (normal, rainbow,...)
function createGrid(num, type) {
	//Calculate value of boxes height and width
	var measures = (560/num)-1;
	$(document).ready(function() {
		//Remove previous grid
		$(".square").remove();
		//Create all the boxes
		for (i=0;i<(num*num);i++) {
			$('.wrapSketch').append('<div class="square"></div>');	
		}
		//Changes CSS for proper boxes measures
		$(".square").height(measures+"px");
		$(".square").width(measures+"px");
		//Changes color of div when mouse hovers
		switch(type) {
			//Different instructions depending on the button pressed
			case 'normal':
				$(".square").hover(function() {
					$(this).css("background-color","orange");
				});
				break;
			case 'rainbow':
				$(".square").hover(function() {
					$(this).css("background-color","#"+Math.floor(Math.random()*16777215).toString(16));
				});
				break;
			case 'gradient':
				$(".square").css("background-color","#222");
				$(".square").css("opacity","1");
				$(".square").hover(function() {
					var opa = $(this).css('opacity');
					$(this).css("opacity",(opa-0.15));
				});
				break;
			case 'trail':
				$(".square").hover(function() {
					$(this).css("opacity", 0);
				}, function () {
					$(this).fadeTo(2000, 1);
				});
				break;
			default:
				alert('Something bad happened');
		}
	})	
}

createGrid(50, 'normal');