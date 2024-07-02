/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

/** 
comments by @ff6347
Thank you I like it but I can't look at it to long ;) makes me dizzy

Besides from the optical illusion of the depth perception flipping I really like the little imperfection in it. Do a little more of this.

After this week you should be able to do this purely generative based on the canvas width and height.

Some ideas.

What if:

- The number of cubes varies each time the image renders
- The light and shadow changes each time
- The canvas rotates after some time to make me even more dizzy
*/


function setup() {
  // setup runs once
  const canvas = createCanvas(360, 360);
  canvas.parent("sketch");
  background(128);
  fill(200);
  triangle(0, 0, 45, 35, 90, 0);
  fill(200);
  triangle(90, 0, 135, 35, 180, 0)
  fill(200);
  triangle(180 ,0 ,225 ,35 ,270 ,0)
  fill(200);
  triangle(270, 0,315, 35, 360, 0)

  fill(100);
  quad(0,0, 45, 35, 45, 90, 0, 60 );
  fill(150);
  quad(45, 35, 90, 0, 90, 60, 45, 90);
  fill(100);
  quad(135, 35, 90, 0, 90, 60, 135, 90);
  fill(150);
  quad(135,35, 180, 0, 180, 60, 135, 90);
  fill(100);
  quad(225, 35, 180, 0, 180, 60, 225, 90);
  fill(150);
  quad(225, 35, 270, 0, 270, 60, 225, 90);
  fill(100);
  quad(315, 35, 270, 0, 270, 60, 315, 90);
  fill(150);
  quad(315, 35, 360, 0, 360, 60, 315, 90);

  fill(200);
  triangle(0, 60, 45, 90, 0, 125 );
  quad(45, 90, 90, 60, 135, 90, 90, 125);
  quad(135, 90, 180, 60, 225, 90, 180, 125);
  quad(225, 90, 270, 60, 315, 90, 270, 125);
  quad(315, 90, 360, 60, 360, 90, 360, 125);

  fill(150);
  quad(0, 125, 45, 90, 45, 145, 0, 175);
  fill(100)
  quad(45, 90 , 90, 125, 90, 175, 45, 145);
  fill(150)
  quad(90, 125, 135, 90 , 135, 145, 90, 175);
  fill(100)
  quad(135, 90, 180, 125, 180, 175, 135, 145);
  fill(150)
  quad(180, 125, 225, 90, 225, 145, 180, 175);
  fill(100)
  quad(225, 90, 270, 125, 270, 175, 225, 145);
  fill(150)
  quad(270, 125, 315, 90, 315, 145, 270, 175);
  fill(100)
  quad(315, 90, 360, 125, 360, 175, 315, 145);
  quad( 45, 90, 90, 125, 90, 175, 45, 145);

  fill(200)
  quad(45, 145, 90, 175, 45, 210, 0, 175);
  quad(90, 175, 135, 145, 180, 175, 135, 210);
  quad(180, 175, 225, 145, 270, 175, 225, 210 );
  quad(270, 175, 315, 145, 360, 175, 315, 210);

  fill(100)
  quad(0, 175, 45, 210, 45, 265, 0,225 );
  fill(150)
  quad( 45 , 210, 90, 175, 90, 225, 45, 265);
  fill(100)
  quad(90, 175, 135, 210, 135, 265, 90, 225);
  fill(150)
  quad(135, 210, 180, 175, 180, 225, 135, 265);
  fill(100)
  quad(180, 175, 225, 210, 225, 265, 180, 225);
  fill(150)
  quad(225, 210, 270, 175, 270, 225, 225, 265);
  fill(100)
  quad(270, 175, 315, 210, 315, 265, 270, 225);
  fill(150)
  quad(315, 210, 360, 175, 360, 225, 315, 265);

  fill(200)
  quad(0, 225, 45, 265, 0, 300, 0, 265);
  quad(45, 265, 90, 225, 135, 265, 90, 300);
  quad(180, 225, 225, 265, 180, 300, 135, 265);
  quad(270, 225, 315, 265, 270, 300, 225, 265);
  triangle(315, 265, 360, 225, 360, 300);

  fill(150)
  quad(0, 300, 45, 265, 45, 325, 0, 365);
  fill(100)
  quad(45, 265, 90, 300, 90, 365, 45, 325)
  fill(150)
  quad(90, 300, 135, 265, 135, 325, 90, 365);
  fill(100)
  quad(135, 265, 180, 300, 180, 365, 135, 325);
  fill(150)
  quad(180, 300, 225, 265, 225, 325, 180, 365);
  fill(100)
  quad(225, 265, 270, 300, 270, 365, 225, 325);
  fill(150)
  quad(270, 300, 315, 265, 315, 325, 270, 365);
  fill(100)
  quad(315, 265, 360, 300, 360, 365, 315, 325);

  fill(200)
  quad(0, 365, 45, 325, 90, 365, 45, 400);
  quad(90, 365, 135, 325, 180, 365, 135, 400);
  quad(180, 365, 225, 325, 270, 365, 225, 400);
  quad(270, 365, 315, 325, 360, 365, 315, 400);
}

function draw() {
  // draw runs all the time
}

function keyPressed() {
	if(key === "s") save("perspective-pkoenig1.png");
}