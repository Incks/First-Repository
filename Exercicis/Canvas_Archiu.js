var positions = [{x:20, y:20, dx:2, dy:3}];
var r = 20;
var dx=20;
var dy=30;

var WIDTH= 300;
var HEIGHT = 300;
var ctx;
var interval;

function init() {
	var cv= document.getElementById('container');
	ctx = cv.getContext("2d");
	var aux = Math.floor(Math.random()*WIDTH-r) +1;
	positions.push({x:aux, y:aux, dx:2, dy:3});
	interval = setInterval(draw, 100);

}
function clear() {
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

function drawBall(newx,newy,color="black") {
	ctx.arc(newx,newy,r,0,Math.PI*2, true);
	ctx.fillStyle = color;
	ctx.fill();
	var aux = Math.floor(Math.random()*WIDTH-r) +1;
}

function draw() {
	
	for (i = 0; i <positions.length;i++) {
		clear();
		var newx= positions[i].x;
		var newy= positions[i].y;
		var newdx= positions[i].dx;
		var newdy= positions[i].dy;

	
	if (newx+r+newdx> WIDTH || newx- r + newdx<0 ) {
		newdx=-newdx;

	}
	if(newy+r+newdy > HEIGHT || newy- r +newdy<0){
		newdy=-newdy;
	}
	newx+=newdx;
	newy+=newdy;
	positions[i].x=newx;
	positions[i].y=newy;
	positions[i].dx=newdx;
	positions[i].dy=newdy;
	if (i==0) {drawBall(newx, newy,"rgba(10,150,150,.5)");}
	else drawBall(newx, newy);
}
}

window.onload = init;