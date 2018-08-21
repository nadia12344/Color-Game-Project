var colors = generateColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var instructionButton = document.querySelector("#instruction");
var easyButton = document.querySelector("#easyButton");
var mediumButton = document.querySelector("#mediumButton");
var hardButton = document.querySelector("#hardButton");
var hard = false;


var resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click",function(){
	colors=generateColors(6);
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			colorDisplay.textContent = pickedColor;
	}
	pickedColor=pickColor();


})

instructionButton.addEventListener("click",function(){
	swal("Instructions", "To win the game, you must choose the color based on the provided RGB on the title");

})

easyButton.addEventListener("click",function(){
	hard = false;
	easyButton.classList.add("selected");
	mediumButton.classList.remove("selected");
	hardButton.classList.remove("selected");
	colors = generateColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
})

mediumButton.addEventListener("click",function(){
	hard = false;
	mediumButton.classList.add("selected");
	easyButton.classList.remove("selected");
	hardButton.classList.remove("selected");
	colors = generateColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})

hardButton.addEventListener("click",function(){
	hard = true;
	mediumButton.classList.remove("selected");
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");

	//choose random first color
	//make sure other colors rotate around the first color
	//set pickedColor
	//the only thing to do diff is generateColors!

	colors = generateColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i]
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent="Correct!";
			changeColors();
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent="Play again?"
		} else {
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again!";
		}
	})
}

function changeColors(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=pickedColor;
	}
}

function pickColor(){
	var num = Math.floor(Math.random() * colors.length);
	return colors[num];
}

function generateColors(num){
	var arr=[]

	if (hard){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		var color = "rgb("+r+", "+g+", "+b+")";
		arr[0] = color;
		for (var i = 1; i <num; i++) {
			arr[i]=randomHardColor(r,g,b);
		}
	} else{
		for (var i = 0; i <num; i++) {
			arr[i]=randomColor();
		}
	}

	return arr;
}

function randomHardColor(r,g,b){
	var colorGap = 50;
	var r1 = Math.floor(Math.random() * ((r+colorGap) - (r-colorGap)) + (r-colorGap));
	var g1 = Math.floor(Math.random() * ((g+colorGap) - (g-colorGap)) + (g-colorGap));
	var b1 = Math.floor(Math.random() * ((b+colorGap) - (b-colorGap)) + (b-colorGap));
	var color = "rgb("+r1+", "+g1+", "+b1+")";
	return color;

}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var color = "rgb("+r+", "+g+", "+b+")";
	return color;
}
