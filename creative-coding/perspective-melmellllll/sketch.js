/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

/** 
comments by @ff6347
Thank you I really like it. 

You should be able to do this totally generative afte this week
Also this sketch could be purely based on the size of the canvas. So you could scale as you like.

What if:

- The dunes cast some more shadows (like the one does)
- The shadows are based on the position of the moon
*/

function setup() {
	// setup runs once
	const canvas = createCanvas(400, 600);
	canvas.parent("sketch");
	rectMode(CENTER);
	ellipseMode(CORNER);
	background(220);
	strokeWeight(100);
	strokeWeight(0);
	fill(250);
	circle(100, 150, 50);
	fill(220);
	circle(117, 150, 38);
	fill(250);
	circle(50, 70, 5);
	fill(250);
	circle(320, 100, 2);
	fill(250);
	circle(340, 110, 4);
	fill(250);
	circle(230, 200, 5);
	fill(250);
	circle(190, 30, 3);
	fill(210);

	
	triangle(0, 250, 120, 250, 60, 230);
	rect(50, 460, 400, 420)
	fill(190);
	
	triangle(0, 310, 400, 310, 200, 210);
	rect(200, 460, 400, 300)
	fill(120);
	triangle(102, 450, 400, 600, 400, 260);
	fill(80);
	triangle(0, 330, 0, 600, 400, 600);
	fill(70);
	triangle(320, 450, 400, 500, 400, 600);
	fill(90);
	triangle(320, 450, 251, 500, 400, 600);
	fill(90);
	triangle(320, 450, 251, 500, 400, 600);

}

function draw() {
	// draw runs all the time
}


function keyPressed() {
	if (key === "s") save("perspective-melmellllll.png");
}