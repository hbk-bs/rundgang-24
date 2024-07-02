/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// Keep these comments alive.
// They will help you while writing code.

function setup() {
  // setup runs once
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  background("white");
  const diam = 20;
  for (let x = diam / 2; x < width; x = x + diam) {
    for (let y = diam / 2; y < height; y = y + diam) {
      fill(random(250));

      circle(x, y, random(diam));
      circle(x, y, random(diam));
      circle(x, y, random(diam));
      circle(x, y, random(diam));
      circle(x, y, random(diam));
      circle(x, y, random(diam));
      circle(x, y, random(diam));
      circle(x, y, random(diam));
      circle(x, y, random(diam));
      circle(x, y, random(diam));
      circle(x, y, random(diam));
      circle(x, y, random(diam));
    } // end of for y
  } //end of for x
} //end of for setup

function draw() {
  // draw runs all the time
}
