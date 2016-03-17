// a variable
var name = "Drew";
var zip = 02906;

// functions
function sayHello() {
	var greeting = "Hello " + name;
	console.log(greeting);
}

$("h1").hover(function() {
	$(this).html("YES");
	$(this).addClass("hovered")
}, function() {
	$(this).html("DOPE")
	$(this).removeClass("hovered")
});

$("h1").click(function () {
	$(this).toggleClass("clicked");
	var randNumber = Math.random() * 150;
	$(this).css("font-size", randNumber + "px");
	console.log(randNumber);
});

// calling a function
sayHello();