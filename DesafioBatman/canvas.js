var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
/*Crédito by:https://youtu.be/9a4aTd1XQZo?t=333 */
c.ellipse(1000, 500, 900, 500, 0, 0, 2 * Math.PI);
c.fillStyle = "#000000";
c.fill();
c.closePath();

c.beginPath();
/*Dividindo por 8 para caber dentro do canva */
c.moveTo(1000/8, 800/8);
c.quadraticCurveTo(1000/8, 460/8, 1390/8, 650/8);
c.quadraticCurveTo(1400/8, 490/8, 1650/8, 650/8);
c.quadraticCurveTo(1400/8, 250/8, 1300/8, 250/8);
c.lineTo(1275/8, 350/8);
c.lineTo(1075/8, 400/8);
c.lineTo(1060/8, 300/8);
c.lineTo(1030/8, 360/8);
c.lineTo(1000/8, 365/8);
c.lineTo(970/8, 360/8);
c.lineTo(940/8, 300/8);
c.lineTo(925/8, 400/8);
c.lineTo(725/8, 350/8);
c.lineTo(700/8, 250/8);
c.quadraticCurveTo(600/8, 250/8, 350/8, 650/8);
c.quadraticCurveTo(600/8, 490/8, 590/8, 650/8);
c.quadraticCurveTo(1000/8, 460/8, 1000/8, 800/8);
c.fill();