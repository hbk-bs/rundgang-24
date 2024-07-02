/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// Keep these comments alive.
// They will help you while writing code.
// @ts-check

/**
 * This is pretty close to where we left off Sunday evening.
 * Can you explain what happens in this sketch?
 * Also PADDING and CELL SIZE need to sync somehow
 */
const PADDING = 50;
//const ROWS = 3;
//const COLUMNS = 5;
const CELL_SIZE = 70;
const CELL_COLOR = 250;
const CANVAS_WIDTH = 380;
const CANVAS_HEIGHT = 300;
const CANVAS_COLOR = "#000";

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(CANVAS_COLOR);
  rectMode(CORNER);
  noStroke();
  fill(CELL_COLOR);
  stroke(0);
  const coordList = [];
  for (let x = PADDING; x < width - PADDING; x += CELL_SIZE) {
    for (let y = PADDING; y < height - PADDING; y += CELL_SIZE) {
      push();
      translate(x, y);
      console.log(x, y);
      //let left = PADDING+ (x*CELL_SIZE);
      //let top = PADDING+(y*CELL_SIZE);
      //let size = CELL_SIZE - 2;
      rect(0, 0, CELL_SIZE, CELL_SIZE);
      fill(random(250));
      circle(random(CELL_SIZE), random(CELL_SIZE), random(10));
      fill(random(200));
      circle(random(CELL_SIZE), random(CELL_SIZE), random(15));
      fill("red");
      circle(random(CELL_SIZE), random(CELL_SIZE), random(15));
      fill("blue");
      circle(random(CELL_SIZE), random(CELL_SIZE), random(10));

      line(0, 0, CELL_SIZE + random(-50, 60), CELL_SIZE);
      pop();
      //fill(random(250));
      strokeWeight(random(2));
    }
  }
}

function draw() {
  // draw runs all the time
}

function keyPressed() {
  if (key === "S" || key === "s") {
    save("small-multiples-pkoenig.png");
  }
  // make it possible to save the sketch as an image
}
