/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

// !HINT: This is only example code to get you started. You don't need to use it. 

// this is analogous
 

let treeColor;

function setup() {
  createCanvas(400, 400);
  treeColor = color(random(255), random(255), random(255));
}

function draw() {
  background(50);
  drawTree(width / 2, height, 100, PI / 2);
}

function drawTree(x, y, len, angle) {
  if (len < 10) {
    return;
  }

  let endX = x + len * cos(angle);
  let endY = y - len * sin(angle);

  stroke(treeColor);
  line(x, y, endX, endY);

  let newLen = len * 0.7;

  drawTree(endX, endY, newLen, angle - PI / 4);
  drawTree(endX, endY, newLen, angle + PI / 4);
}

function keyPressed() {
	
		if (key === "S" || key === "s") {
			save("colortheme-pkoenig1.png");
		}
		// make it possible to save the sketch as an image
	
  if (keyCode === ENTER) {
    treeColor = color(random(255), random(255), random(255));
  }
}
