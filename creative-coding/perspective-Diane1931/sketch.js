/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

/** 
comments by @ff6347
Thank you I really like it. 

After this week you should have the tools to do this totally generative
Some ideas: 

- The depth could change on each render
- The stars could change 
- The position of the moon could change
- This sketch is perfect for scaling it based on the canvas size. All your position calculations should be based on the `width` and `height` of the canvas


*/

function setup() {
	// setup runs once
	const canvas = createCanvas(200, 300);
	canvas.parent("sketch");
	background(128);
  strokeWeight(0);
  fill(0);
  quad(0,300,200,300,110,160,90,160);
  fill(200);
  rect(0,0,200,150);
  strokeWeight(1);
  //housemiddle
  fill(140); 
  rect(90,150,20,10);
  triangle(90,150,110,150,100,135);
  fill(100);
  //lefthouse
  quad(0,300,0,150,50,150,50,223);
  triangle(0,150,50,150,25,100);
  fill(110);
  triangle(0,150,25,100,0,100);
  //righthouse
  fill(100);
  quad(200,300,200,150,150,150,150,223);
  triangle(200,150,150,150,175,100);
  fill(110);
  triangle(200,150,200,100,175,100);
  //lefthouse2
  fill(120)
  quad(50,150,50,223,90,160,90,150);
  triangle(50,150,90,150,70,120);
  fill(130);
  triangle(50,150,70,120,35,120);
  //righthouse2
  fill(120);
  quad(150,150,150,223,110,160,110,150);
  triangle(150,150,110,150,130,120);
  fill(130);
  triangle(150,150,130,120,165,120);
  //mond
  fill(250);

	for(let i = 0; i < 100; i++){
		circle(random(width),random(height/2),2);
	}
  // circle(50,50,20);
  // //stars
  // circle(120,70,2);
  // circle(82,50,2);
  // circle(50,90,2);
  // circle(80,20,2);
  // circle(50,10,2);
  // circle(100,80,2);
  // circle(80,110,2);
  // circle(160,60,2);
  // circle(145,90,2);
  // circle(20,70,2);
  // circle(19,30,2);
  // circle(150,20,2);
  // circle(130,40,2);
  // circle(110,100,2);
  // circle(110,30,2);
  // circle(120,10,2);
  // circle(180,20,2);
  // circle(180,90,2);
  // circle(100,120,2);
  // circle(70,80,2);
  // circle(170,40,2);
  // circle(5,50,2);
  // circle(180,70,2);
  // circle(160,80,2);
  // circle(130,70,2);
  // circle(40,110,2);
  // circle(35,30,2);
  // circle(30,10,2);
  // circle(10,80,2);
  // circle(100,70,2);
  // circle(150,90,2);
  // circle(130,110,2);
  // circle(190,50,2);
}

function draw() {
	// draw runs all the time
}

function keyPressed() {
	if(key === "s") save("perspective-Diane1931.png");
}
