var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//Créditos https://www.tutorialspoint.com/How-to-draw-a-star-by-using-canvas-HTML5

c.fillStyle = "black";
c.beginPath();
c.moveTo(108, 0.0);
c.lineTo(141, 70);
c.lineTo(218, 78.3);
c.lineTo(162, 131);
c.lineTo(175, 205);
c.lineTo(108, 170);
c.lineTo(41.2, 205);
c.lineTo(55, 131);
c.lineTo(1, 78);
c.lineTo(75, 68);
c.lineTo(108, 0);
c.closePath();
c.fill();