/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// Keep these comments alive.
// They will help you while writing code.
//@ts-check
/**
 * Well done. You developed a small multiple.
 * If we change diam. We dont change the raster from the first loop
 * And if we change row and column we donet change the second loop. This should happen in the same loop
 *
 */
function setup() {
  // setup runs once
  const canvas = createCanvas(400, 400);
  canvas.parent("sketch");
  background(128);
  const diam = 80;
  const w = width / 3;
  const h = height / 3;
  const columns = 5;
  const rows = 5;

  const cellWidth = width / columns;
  const cellHeight = height / rows;

  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      const x = c * cellWidth;
      const y = r * cellHeight;

      rect(x, y, cellWidth, cellHeight);
    }
  }

  for (let x = diam / 2; x < width; x = x + diam) {
    for (let y = diam / 2; y < height; y = y + diam) {
      fill(200);
      ellipse(x, y, 78);
      noFill();
      ellipse(x, y, random(60));
      fill(225);
      ellipse(x, y, random(80));
      fill(150);
      ellipse(x, y, random(70));
      fill(100);
      rect(x - 20, y - 20, random(40), random(45));
      push();
      translate(random(8), random(8));
      circle(x, y, random(15)); // der kreis in der Mitte
      pop();
    }
  }
}

function draw() {}
// draw runs all the time

function keyPressed() {
  if (key === "s") save("small-multiples-ischlueter.png");
}
