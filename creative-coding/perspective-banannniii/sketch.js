/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

/** 
comments by @ff6347
Thank you I like it.

After this week you will have the tools to do this totally generative.
Some ideas:

- Are these trees or are these montains?
- What about a night sky?
- What about a little bird that sits on one of the trees?

*/

function setup() {
	// setup runs once
	const canvas = createCanvas(400, 500);
	canvas.parent("sketch");
	background(0);
//sky
  fill(50);
  rect(0,0,400,200);
//reihe1
  fill(200);
  triangle(200,250,300,250,250,70);
  triangle(200,250,100,250,150,50);
  triangle(100,250,0,250,50,80);
  triangle(300,250,400,250,350,60);
//reihe 2
  fill(180);
  triangle(0,300,50,300,0,150);
  triangle(50,300,150,300,100,130);
  triangle(150,300,250,300,200,120);
  triangle(250,300,350,300,300,140);
  triangle(350,300,400,300,400,120);
//reihe 3
  fill(160);
  triangle(0,350,100,350,50,170);
  triangle(100,350,200,350,150,190);
  triangle(200,350,300,350,250,180);
  triangle(300,350,400,350,350,210);
//reihe 4
  fill(140);
  triangle(0,400,50,400,0,250);
  triangle(50,400,150,400,100,230);
  triangle(150,400,250,400,200,220);
  triangle(250,400,350,400,300,240);
  triangle(350,400,400,400,400,220);
//reihe 5
  fill(120);
  triangle(0,450,100,450,50,260);
  triangle(100,450,200,450,150,280);
  triangle(200,450,300,450,250,270);
  triangle(300,450,400,450,350,260);
  //reihe 4
  fill(100);
  triangle(0,500,50,500,0,330);
  triangle(50,500,150,500,100,350);
  triangle(150,500,250,500,200,340);
  triangle(250,500,350,500,300,350);
  triangle(350,500,400,500,400,330);
}
function draw() {
	// draw runs all the time
}


function keyPressed() {
	if(key === "s") save("perspective-banannniii.png");
}