var canvas;
var canvasContext;

window.onload = function() {
	console.log("Get Ready to Play!");
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	canvasContext.fillStyle = 'navy';
	canvasContext.fillRect(0, 0, canvas.width, canvas.height);

}