/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// Keep these comments alive.
// @ts-check
// They will help you while writing code.

/**
 * Well done. You developed a small multiple.
 * What bugs me is that if we change diam it all falls apart. There seems to be some irregularity in your raster ;)
 * What is this fuzzy hair ball in the upper left corner?
 *
 */

let area = 50;
let number = 5;
let gutter = 20;
let w = 5;
let h = 5;
//let stepx = gutter + area / 2;
//let stepy = gutter + area / 2;
let x = 50;
let y = 50;
let diam = 125;

function setup() {
  // setup runs once
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  rectMode(CENTER);
  background(0);
  stroke(255 - random(50, 100));
  // const diam = 10;
  // Der iterator ist flasch!
  // posx = posx+= diam
  // sollte
  // posx = posx + diam
  // sein
  // oder
  // posx +=diam
  for (let posx = diam / 2; posx < width; posx += diam) {
    for (let posy = diam / 2; posy < height; posy = posy + diam) {
      //randomSeed(80)
      push();
      translate(posx, posy);
      fill(50);
      //rect(0, 0, diam, diam);
      fill(0 + random(50, 255));
      for (let i = 0; i < 2; i++) {
        fill(random(200, 255));
        circle(0, 0, random(15, 20));
        for (let i = 0; i < 2; i++) {
          noFill();
          ellipse(random(20, 40), 0, random(10, 20), random(10, 80));
          ellipse(random(-20, -40), 0, random(10, 20), random(10, 80));
          // circle (0,0, random (30,50))
          for (let i = 0; i < 2; i++) {
            noFill();
            ellipse(0, 0, random(20, 40), random(70, 90));
            noFill();
            ellipse(0, 0, random(20, 100), random(20, 50));
            noFill();
            ellipse(0, 0, random(50, 90), random(50, 90));
            fill(180);
            ellipse(0, -3, random());
            line(0, -50, 50, 0);
            line(0, -50, -50, 0);
            //line (-50,0,0,-50)
            //line (-50,0,50,0)
            line(random(-30, 50), -40, random(30, 50), -40);
            line(random(-20, 50), -60, random(30, 90), -60);
            line(random(-30, 50), -80, random(30, 50), -80);
            line(80, random(20, 40), 80, random(80, 90));
            line(90, random(20, 40), 90, random(80, 90));
            line(100, random(10, 60), 100, random(70, 100));
            line(-80, random(10, 60), -80, random(70, 100));
            //ellipse (0, -2, random(10,20), random (5,8))
            //circle (5, 0, random (10,20))
            noFill();
            //circle (-10, 0, random (30,50))
            fill(255);
            //circle (random (-10,10),0,10)
          }

          //line(250, 0, 250, 500);
          //line(0, 250, 500, 250);
          //circle(x + random(100, 150), y + random(30, 60), diam + random(10, 30));

          // kleiner, mittiger Kreis
          fill(0);
          noStroke();
          //circle(125, 125, diam3);

          //
          // zweiter Kreis
          noFill();
          stroke(255 - random(50, 100));
          //circle(x + random(110, 140), y + random(20, 80), diam2 + random(20, 40));
          pop();
        }
      }
    }
  }
}
function draw() {
  // draw runs all the time
}

function keyPressed() {
  if (key === "s") save("small-multiples-hflintermann.png");
}
