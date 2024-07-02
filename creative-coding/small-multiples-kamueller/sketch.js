/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// Keep these comments alive.
// They will help you while writing code.

/**
 * Well done. I like that your fox scales with the rest of sketch if I change diameter.
 * Currently only the color of the face changes. Could be the color of the whole body.
 * We could discuss about the spinning background. What I like about it is that you managed to get it to work. Kudos for that.
 * Some improvments:
 * - The task was to create small multiples:
 * - Remove the spinning background.
 * - Concentrate on the fox by giving him something unique in each iteration additional to the face color
 * - You cold have different expressions for the face selected by random
 * - tbd
 */

const myCanvasWidth = 500;
const myCanvasHeight = 500;
let angle = 0;
let y = 0;
let x = 0;

function setup() {
  // setup runs once
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  angleMode(DEGREES);
}

function draw() {
  // draw runs all the time
  background(0);
  randomSeed(6);
  const diam = 125;
  fill(random(255));
  for (let x = diam / 2; x < width; x = x + diam) {
    for (let y = diam / 2; y < width; y = y + diam) {
      push();
      noFill();
      strokeWeight(2);
      stroke(60);
      translate(x, y);
      rotate(radians(frameCount * 50));
      rectMode(CENTER);
      rect(0, 0, 90, 90);
      rect(0, 0, 80, 80);
      rect(0, 0, 70, 70);
      circle(0, 0, 70);
      pop();

      fill(60);
      strokeWeight(0);
      stroke(130);
      circle(x, y, random(diam));

      fill(255 - random(0, 180));
      strokeWeight(0);
      quad(x, y, x - 20, y - 18, x - 10, y - 28, x, y - 30);
      quad(x, y, x + 20, y - 18, x + 10, y - 28, x, y - 30);
      fill(0);
      quad(x, y, x - 5, y - 5, x, y - 8, x + 5, y - 5);
      fill(100);
      triangle(x - 20, y - 18, x - 10, y - 28, x - 25, y - 35);
      triangle(x + 20, y - 18, x + 10, y - 28, x + 25, y - 35);
      fill(0);
      triangle(x - 18, y - 20, x - 12, y - 26, x - 21, y - 30);
      triangle(x + 18, y - 20, x + 12, y - 26, x + 21, y - 30);
      fill(180);
      quad(x - 8, y - 7, x, y, x, y + 30, x - 25, y + 20);
      fill(180);
      quad(x + 8, y - 7, x, y, x, y + 30, x + 10, y + 20);
      fill(160);
      triangle(x - 8, y - 7, x, y + 25, x - 25, y + 20);
      fill(120);
      quad(x - 25, y + 20, x, y + 30, x + 5, y + 40, x - 22, y + 28);
      fill(140);
      triangle(x - 25, y + 20, x, y + 30, x, y + 24);
      fill(255);
      quad(x, y + 24, x + 10, y + 20, x + 20, y + 35, x, y + 30);
      triangle(x, y + 30, x + 20, y + 35, x + 5, y + 40);
      fill(0);
      ellipse(x - 6, y - 16, 5, 7);
      ellipse(x + 6, y - 16, 5, 7);
      fill(255);
      ellipse(x - 6, y - 15, 2, 2);
      ellipse(x + 6, y - 15, 2, 2);
      strokeWeight(3);
    }
  }
}

function keyPressed() {
  if (key === "s") save("small-multiples-kamueller.png");
}
