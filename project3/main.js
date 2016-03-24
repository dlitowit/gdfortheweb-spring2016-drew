// a variable
var colors = ["#ffff00", "orange", "#e5e500", "#ffc04c","yellow"];
var words = ["coming", "RISD", "visiting", "designer", "yay!", "2016", "March", "CIT 103", "10-13", "Keetra", "Dean", "Dixon", "is", "a", "Designer", ",", "Director", "and", "Artist", ".", "Her", "hybrid", "design", "background", "and", "expertise", "in", "graphic" ,"design", "often", "leads", "her", "work", "towards", "speculative", "terrain", "leveraging", "emergent", "technologies", "the", "shortcomings", "of", "ubiquitous", "creative", "tools"];

// functions

$(".keetra").on("click", function() {
	// $(".name").text("A Lecture and Workshop");

	$(".lecture").toggle();
});




// $("body").on("click", function(){
// 	$(".keetra").html ("A Lecture and a Workshop");
// });
// $("body").on("mouseup", function(){
// 	$(".keetra").html("Keetra Dixon")
// });


$(".keetra").hover(function() {
	$(".confetti").each(function() {
		
		var randNumber = Math.random();
		$(this).css ("transform", "rotate(" + (randNumber/10) + "deg)");
		$(this).toggleClass("hovered")
		
		var randcolor = colors[Math.floor(Math.random() * colors.length)];
		$(this).css("color", randcolor);
		$(this).css("font-size", "." + (randNumber/10));
		
		var wordchange = words[Math.floor(Math.random() * words.length)];
		$(this).html(wordchange);
	});
	});
	

$(document).on('mousemove', function(e){
    $('.keetra').css({
       left:  e.pageX,
       top:   e.pageY
    });
});
