var canvas;
var canvasContext;
var ballX = 400;
var ballY = 300;
var radius = 10;

window.onload = function() {
	
	console.log("Get Ready to Play!");
	canvas = document.getElementById('gameCanvas');
	canvas.setAttribute('width', 800);
	canvas.setAttribute('height', 600);
	canvasContext = canvas.getContext('2d')

	setInterval(drawEverything,10);
}

function drawEverything()
{
	ballX = ballX + (Math.random()*10)-5;
	ballY = ballY + (Math.random()*10)-5;
	canvasContext.fillStyle = 'green';
	canvasContext.fillRect(0, 0, canvas.width, canvas.height);
	canvasContext.beginPath();
    canvasContext.arc(ballX, ballY, radius, 0, 2 * Math.PI, false);
    canvasContext.fillStyle = 'red';
    canvasContext.fill();
    canvasContext.lineWidth = 0;
    canvasContext.strokeStyle = '#003300';
    canvasContext.stroke();
}