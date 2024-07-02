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
  background(155);
  noStroke();
  const step = 55;
  for (let x = step / 2; x < width; x += step) {
    for (let y = step / 2; y < height; y += step) {
      push();
      fill(20);
      translate(x, y);
      if (random() > 10) {
        rect(-step / 2, -step / 2, step / 2, step / 2);
      } else {
        rect(-step / 2, -step / 2, step / 2, step / 2);

        fill(120);
        circle(-step / 2, -step / 2, step / 2);
        if (random) 10;

        pop();
      }
    }
  }
}

function draw() {
  // draw runs all the time
}
