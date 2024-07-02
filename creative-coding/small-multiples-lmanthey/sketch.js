/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts"
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

/**
 * This looks sweet! Well done. https://www.emilydamstra.com/please-enough-dead-butterflies/
 * But please, enough with the dead butterflies!
 * You did a great job and encapsulated logic into a function! 💯
 * 7 seems to be the magic number
 */

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  const columns = 7;
  const rows = 7;

  const cellWidth = height / columns; //Zellenbreite = Höhe / Spalten
  const cellHeight = width / rows; //Zellenhöhe = Breite / Reihen

  for (let c = 0; c < columns; c++) {
    // c = column
    for (let r = 0; r < rows; r++) {
      // r = row
      const x = c * cellWidth; // Größe von x
      const y = r * cellHeight; // Größe von y

      myButterfly(x, y, cellWidth / 2);

      myButterfly(x, y, cellWidth / 2);
    }
  }
}

function myButterfly(x, y, size) {
  push();
  stroke(30);
  fill(random(80));
  //antenna
  line((x = x + 35), (y = y + 26), x + size / 2, y - size / 2); //line right
  line(x, y, x - size / 2, y - size / 2); //line left
  noStroke();
  circle(x + size / 2, y - size / 2, random(8, 11)); //antenna right
  circle(x - size / 2, y - size / 2, random(8, 11)); //antenna left
  pop();

  push();
  //noStroke();
  fill(random(100, 240));
  // Draw a wing left top
  circle(x + size / 2.4, y + size / 7, size * 0.6); // 2. Wingpart
  circle(x + size / 4, y + size / 3, size / 3); // 1. Wingpart
  circle(x + size * 0.65, y - size / 8, size / 4); // 3. Wingpart
  // Draw a wing left top
  circle(x - size / 2.4, y + size / 7, size * 0.6); // 2. Wingpart
  circle(x - size / 4, y + size / 3, size / 3); // 1. Wingpart
  circle(x - size * 0.65, y - size / 8, size / 4); // 3. Wingpart

  fill(random(100, 240));
  //wing right bottom
  circle(x + size / 2.8, y + size * 0.7, size / 2); // 4. Wingpart
  circle(x + size * 0.6, y + size * 0.9, size / 4); // 5. Wingpart
  // wing left bottom
  circle(x - size / 2.8, y + size * 0.7, size / 2); // 4. Wingpart
  circle(x - size * 0.6, y + size * 0.9, size / 4); // 5. Wingpart
  pop();

  push();
  fill(random(80));
  // Draw a butterfly body
  circle(x, y + size / 3, size / 4); // 2. Bodypart
  circle(x, y + size * random(1, 1.1), size / 4); // 4. Bodypart
  circle(x, y, random(15, 20)); // 1. Bodypart
  circle(x, y + size * 0.675, random(7, 20)); // 3. Bodypart
  pop();

  push();
  noFill();
  stroke(random(99));
  //Symbols right
  circle(x + size / 2, y + size / 7, size / random(3, 5));
  circle(x + size / 2, y + size / 7, size / random(6, 10));
  circle(x + size / 2.5, y + size / 1.5, size / random(4, 10));
  //Symbols left
  circle(x - size / 2, y + size / 7, size / random(3, 5));
  circle(x - size / 2, y + size / 7, size / random(6, 10));
  circle(x - size / 2.5, y + size / 1.5, size / random(4, 10));
  pop();

  push();
  circle(x, y - size / 6, size / 4);
  circle(x, y - size / 10, size / random(3.5, 4.5));
  circle(x - size / 4, y + size / 3, size / 6);
  circle(x + size / 4, y + size / 3, size / 6);
  pop();

  noLoop(); //damit nicht flackert (ff6347: or you put it into setup)
}

function keyPressed() {
  if (key === "s") save("small-multiples-lmanthey.png");
}
