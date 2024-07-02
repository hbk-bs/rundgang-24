/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.
/** 

const myBaseColors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown",];

const randomColor = myBaseColors[
  Math.floor(
    Math.random() * myBaseColors.length
  )
];

const h = hue(randomColor);

const newAngle = (h + 180)%360
*/


//analogous

let angle = 0;



function setup() {
  let h = random(170, 200)
  let s = random(20, 100)

  createCanvas(250, 500);
  colorMode(HSB, 360, 100, 100, 100);
  background(200, 80, 30);
  angleMode(DEGREES);
  const randomColor = color(h, s, 100);

  fill(randomColor);

  while (angle < 360) {


    const radius = 80
    const x = sin(angle) * radius + width / 2;
    const y = cos(angle) * radius + height / 4;


    console.log(x, y);

    circle(x, y, 60);

    h += 30
    s += 20
    fill(h % 360, 50, 100)

    angle = angle + 90;

  }
  //complementary

  translate(0, height / 2);
  let r = 0
  let b = 240
  let ye = 50

  let g = 120
  let o = 30
  let v = 290

  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
  const complementaryColor = color(r, 100, 50);
  fill(complementaryColor);


  rect(0, 0, width, height / 2);


  const complementary = color(g, 100, 50);
  fill(complementary);

  rectMode(CENTER);
  rect(width / 2, height / 4, 60);

  
}

function draw() {
  // draw runs all the time

}

function keyPressed() {
  if (key === "S" || key === "s") {
    save("color-theme-anne2810.png");
  }
  // make it possible to save the sketch as an image
}




