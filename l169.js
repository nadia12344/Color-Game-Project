var colors = generateColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var instructionButton = document.querySelector("#instruction");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");


var resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click",function(){
	colors=generateColors(6);
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			pickedColor=pickColor();
			colorDisplay.textContent = pickedColor;
	}

})

instructionButton.addEventListener("click",function(){
	swal("Instructions", "To win the game, you must choose the color based on the provided RGB on the title");

})

easyButton.addEventListener("click",function(){
	easyButton.classList.add("selected");
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

hardButton.addEventListener("click",function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
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
	for (var i = 0; i <num; i++) {
		arr[i]=randomColor();
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var color = "rgb("+r+", "+g+", "+b+")";
	return color;
}
