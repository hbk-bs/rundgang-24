/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

/** 
comments by @ff6347
Thank you I really like it. 

Some ideas here:

- In the next few days we will learn how to use chance: what if the number of images on the wall always change every time when you load the sketch?
- Also what if the depth of the room changes?
*/

function setup() {
  // setup runs once
  const canvas = createCanvas(400, 400);
  canvas.parent("sketch");
  background(128);
  fill(70);
  rect(125, 125, 150, 150);
  line(0, 0, 125, 125);
  line(400, 400, 275, 275);
  line(0, 400, 125, 275);
  line(400, 0, 275, 125);
  fill(150);
  quad(130, 290, 270, 290, 350, 375, 50, 375);
  ellipseMode(CENTER);
  strokeWeight(1)
  line(325, 200, 350, 200);
  ellipse(337, 200, 70, 150);
  line(325, 200, 350, 200);
  fill(200);
  strokeWeight(1);
  fill(70)
  rect(338, 200, 4, 2);
  ellipseMode(CENTER);
  fill(80);
  rect(338, 200, 4, 2);
  fill(185)
  ellipse(336, 200, 50, 120);
  fill(185);
  strokeWeight(2);
  square(140, 150, 30);
  rect(175, 170, 20, 30);
  ellipseMode(CENTER);
  ellipse(155, 205, 25, 35);
  rect(200, 150, 25, 30);
  ellipseMode(CENTER);
  ellipse(200, 65, 75, 30);
  fill(70);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(200, 65, 30, 12);
  fill(240);
  noStroke();
  rect(203, 153, 19, 23);
  rect(178, 173, 14, 23);
  square(143, 153, 24);
  ellipse(200, 68, 20, 4);
  ellipse(155, 205, 20, 27);
  strokeWeight(5);
  fill(150);
  quad(19, 95, 75, 142, 75, 324, 18, 379);
  fill(185);
  quad(25, 110, 70, 147, 70, 329, 25, 374);
  fill(110);
  strokeWeight(4);
  circle(62, 233, 10);
  fill(245);
  circle(63, 232, 5);
}


function draw() {
  // draw runs all the time
}

function keyPressed() {
  if (key === "s") save("perspective-babedini.png");
}