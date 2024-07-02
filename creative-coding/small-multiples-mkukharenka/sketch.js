/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// Keep these comments alive.
// They will help you while writing code.
/**
 * Well done I really like the style. A small problem is that cell and step are not bound together. You need to find the sweet spot between them. But still looks pretty good.
 */
function setup() {
  // setup runs once
  const canvas = createCanvas(520, 520); //the size of the window
  canvas.parent("sketch");
  background(255);
  angleMode(DEGREES);

  const step = 40;
  const cell = step / 2;

  for (let x = cell / 2; x < width; x = x + step) {
    // loop the x axis
    for (let y = cell / 2; y < height; y += step) {
      // loop the y axis

      push();

      strokeWeight(random(1, 3));
      circle(x, y, cell + random(-30, 0)); // draw a circle

      fill(10 + random(50, 200));
      let i = random(-10, 10);
      arc(x, y, cell + i, cell + i, random(0, 270), random(90, 360)); // draw an arc

      noFill();
      let n = random(5, 10);
      arc(x, y, cell + n, cell + n, random(0, 270), random(90, 360)); // draw another arc

      pop();
    }
  }
}

function draw() {
  // draw runs all the time
}

function keyPressed() {
  if (key === "S" || key === "s") {
    save("smallmultiples-mkukharenka.png");
  }
  // make it possible to save the sketch as an image
}
