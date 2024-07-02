/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// Keep these comments alive.
// They will help you while writing code.
//@ts-check

/**
 * This is pretty close to where we left off Sunday evening.
 * Can you explain what happens in this sketch?
 *
 */

function setup() {
  // setup runs once
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  background(255);
  fill(150);
  const w = width / 4;
  const h = height / 3;
  for (let x = 0; x < width; x += w) {
    for (let y = 0; y < height; y += h) {
      push();
      translate(x, y);
      strokeWeight(2); // <-- the red squiggle means there is an error
      rect(0, 0, w, h);

      for (let i = 0; i < 10; i++) {
        let innerX = random(w);
        let innerY = random(h);
        strokeWeight(random(3));
        line(w / 2, h / 2, innerX, innerY);
        fill(random(150, 255));

        strokeWeight(random(4));
        fill(random(150, 255));
        // if (x === 0 && y === 0) {
        // 	// This here is dead code ☠️
        // 	fill("red");
        // 	}else{
        // 	fill("green");
        // }

        circle(innerX, innerY, random(20));
      }
      pop();
    }
  }
}

function draw() {
  // draw runs all the time
  //background(225); // 👈🏾 hahahah This was overwriting your  drawing
}

function keyPressed() {
  if (key === "S" || key === "s") {
    save("small-multiples-babedini.png");
  }
  // make it possible to save the sketch as an image
}
