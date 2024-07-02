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
 *
 */

function setup() {
  // setup runs once
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  background(random(122));
  const circleSize = 50;

  const r = 127,
    g = 127,
    b = 127;
  fill(r, g, b);
  //loop
  for (let y = 0; y < height; y += circleSize) {
    for (let x = 0; x < width; x += circleSize) {
      push();

      // translate(x,y);
      //sizerange
      fill(random(255));
      stroke(255);

      rect(x, y, circleSize, circleSize);
      //let randomSize = random(0, 20);

      if (random() > 0.5) {
        strokeWeight(4);
        fill("black");
        circle(x + circleSize / 2, y + circleSize / 2, 30);
        fill(255);
        circle(x + circleSize / 2, y + circleSize / 2, 15);
      } else {
        fill("black");
        rect(x + circleSize / 4, y + circleSize / 4, 20);
      }

      pop();
    }
  }
}

//size of circle

function draw() {}

// draw runs all the time

function keyPressed() {
  if (key === "s") save("small-multiples-Diane1931.png");
}
