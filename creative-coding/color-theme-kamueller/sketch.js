/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

// !HINT: This is only example code to get you started. You don't need to use it. 

// this is analogous

let angle = 0;
let angleStep = 70;
let sat = 100;
let saturationStep = 10;
let light = 100;
let lightnessStep = 0;
let colors = [];
let i = 0;

function setup() {
  createCanvas(600, 610)
  background(0);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);


  noFill();
  stroke(255);
  circle(285, 108, 100);
  circle(480, 103, 100);
  stroke(255);
  line(100, 70, 100, 140);
  fill("blue");
  noStroke();
  circle(100, 60, 50);
  fill("orange");
  circle(100, 150, 50);

  while (angle < 360) {
    const radius = 50;
    const x = sin(angle) * radius + width / 2.1;
    const y = cos(angle) * radius + height / 6;
    console.log(x, y)
    fill(angle, 100, 100);
    noStroke();
    circle(x, y, 50);
    angle = angle + 360 / 3;

  }

  while (i < 7) {
    colors.push(color(angle % 300, sat, light, 100));
    console.log(i, angle);
    angle += angleStep;
    sat -= saturationStep;
    light += lightnessStep;
    i++;
  }



  noStroke();
  for (let i = 2; i < colors.length; i++) {
    fill(colors[i]);
    circle(70 * i, 280, width / colors.length)
    fill(10 * i, 100, 100);
    circle(70 * i, 450, width / colors.length);
  }



  for (let angle = 0; angle < 360; angle += 360 / 4) {
    const radius = 50;
    const x = sin(angle) * radius + width / 1.25;
    const y = cos(angle) * radius + height / 6;
    console.log(x, y)
    fill(angle, 100, 100);
    noStroke();
    circle(x, y, 50);

  }

}

function draw() {
  // draw runs all the time
}

function keyPressed() {
  if (key === "S" || key === "s") {
    save("color-theme-kamueller.png");
  }
  // make it possible to save the sketch as an image
}