/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// Keep these comments alive.
// They will help you while writing code.
/*
 * @TODO: write comments
 */
/**
 * Well done. I like that you created an irregular raster. A challenging  task would be to have an irregualr raster but make it fit the width of the canvas non the less.
 * I also like that your rectangles are not leaving the circle. How did you do this?
 - every time when a rectangle is drawn, a circle is drawn with the cordinates of the centre of each rectangle, and also if I made a size of rectangles bigger they'd have left an area of these circles.
 */
const shapes = ["circle", "rect"];
function setup() {
  // setup runs once
  const canvas = createCanvas(600, 600);
  canvas.parent("sketch");
  background(128);
  const rectWidth = 60; // Width of the rectangle
  const rectHeight = 40; // Height of the rectangle
  // Set the fill color to gray
  for (let y = 0; y < height; y += rectHeight) {
    // Loop through the height of the canvas
    fill(random(220));
    //
    stroke(255);
    strokeWeight(5);
    for (let x = 10; x < width; x += rectWidth) {
      // Loop through the width of the canvas
      push();
      translate(x, y);

      let randomWidth = random(-10, 10); // Randomize the width of the rectangle
      rect(0, 0, rectWidth + randomWidth, rectHeight);
      //ellipse(0,0, 10, 10);

      push();
      fill(random(66));
      circle(rectWidth / 6, rectHeight / 3, 34);
      pop();

      fill(255);
      noStroke();
      const shape = random(shapes);
      if (shape === "circle") {
        circle((rectWidth + randomWidth) / 4, rectHeight / 4, 10);
      } else {
        rect((rectWidth + randomWidth) / 4, rectHeight / 4, 10);
      }
      x += randomWidth;
      pop();
    }
  }
}

function keyPressed() {
  if (key === "s") save("small-multiples-mokatrino.png");
}
