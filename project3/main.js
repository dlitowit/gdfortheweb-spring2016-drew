// a variable
var name = "Drew";
var zip = 02906;
var colors = ["#ffff00", "orange", "#e5e500", "#ffc04c","yellow"];
var words = ["coming to", "RISD", "visiting", "designer", "yay!", "she's coming!!", "form", "CIT 103"];

// functions
function sayHello() {
	var greeting = "Hello " + name;
	console.log(greeting);
}

$(".keetra").click(function() {
	$("#text").toggle();
});


$(".keetra").hover(function() {
	$(".confetti").each(function() {
		var randNumber = Math.random();
		$(this).html("visiting designer");
		$(this).toggleClass("hovered")
		var randcolor = colors[Math.floor(Math.random() * colors.length)];
		$(this).css("color", randcolor);
		$(this).css("font-size", "." + (randNumber/10));
		var wordchange = words[Math.floor(Math.random() * words.length)];
		$(this).html(wordchange);

	});
	});


	//$(this).html("DOPE")
	//$(this).removeClass("hovered")
	//$(this).html(" ");
	

$(document).on('mousemove', function(e){
    $('.keetra').css({
       left:  e.pageX,
       top:   e.pageY
    });
});
// calling a function
sayHello();	