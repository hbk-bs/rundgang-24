/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

/** 
comments by @ff6347
Thank you I really like it. 

I like that your canvas is still 100 by 100 px. Reminds me of all the Design by numbers sketches.

- What if we could scale the sketch and it would stay the same?
- What if the number of trees is generative (pretty hard with the read/river) but you could try
- What if the sun moves slowly over the sky?
- Could  the whole image be generated?
*/


function setup() {
  const canvas = createCanvas(100, 100);
  canvas.parent("sketch");
  background(255);

  fill(color("grey"));
    triangle(30, 57, 100, 57, 75, 20);
    triangle(60, 60, 100, 0, 100, 60);
    triangle(-30, 70, 55, 70, 30, 20);

  fill(225);
  triangle(1, 90, 3, 79, 6, 90);
  triangle(7, 95, 9, 80, 13, 95);
  triangle(15, 85, 17, 74, 21, 85);
  triangle(23, 87, 25, 75, 29, 87);
  triangle(32, 90, 34, 80, 38, 90);
  triangle(40, 83, 41, 75, 43, 83);
  triangle(44, 87, 46, 78, 48, 87);
  triangle(50, 82, 51, 74, 53, 82);
  triangle(92, 90, 94, 82, 96, 90);
  triangle(85, 95, 87, 82, 90, 95);
  triangle(75, 98, 77, 85, 80, 98);

  
  fill(0);
  rect(3, 90, 1, 3);
  rect(9, 95, 1, 3);
  rect(17, 85, 1, 3);
  rect(25, 87, 1, 3);
  rect(34, 90, 1, 3);
  rect(41, 83, (1/5), 2);
  rect(46, 87, (1/5), 2);
  rect(51, 82, (1/5), 1);
  rect(94, 90, 0.5, 2);
  rect(87, 95, 1, 3);
  rect(77, 98, 1, 3);


  
  

  noFill();
    bezier(60, 60, 75, 80, 85, 85, 50, 100);
    bezier(50, 60, 55, 70, 85, 85, 20, 100);

  fill(200);
  ellipse(10, 15, 10, 10);

  line(19, 15, 21, 15);
  line(10, 23, 10, 25);
  line(1, 15, -2, 15);
  line(10, 5, 10, 7);
  line(16, 20, 18, 22);
  line(3, 20, 1, 22);
  line(15, 9, 17, 7);
  line(2, 7, 5, 9);
 
}
  

function keyPressed() {
	if(key === "s") save("perspective-ischlueter.png");
}

