/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

//!HINT: This is only example code to get you started. You don't need to use it. 

// this is analogous


let angle = 0;
function setup() {
  createCanvas(300, 300);
  colorMode(HSB, 360, 100, 100, 100)
  background(255);
  strokeWeight(0);

//analogous color schema
  //fill("black");
  //circle(50,50,100);
  fill("#63B14E");
  triangle(93, 23, 51, 51, 8, 23);
  fill("#4EB19C");
  triangle(50, 98, 50, 50, 8, 23);
  fill("#4EB16A");
  triangle(50, 98, 50, 50, 93, 23);

//complementery color schema
  //fill("black");
  //circle(150,50,100);
  fill("#3FFF00");
  triangle(150, 98, 150, 23, 108, 23);
  fill("#C000FF");
  triangle(150, 98, 150, 23, 192, 23)

//triadic color schema
  //fill("black")
  //circle(250,50,100);
  fill("#785BA4");
  triangle(294, 23, 250, 51, 207, 23);
  fill("#A4785B");
  triangle(250, 98, 250, 50, 207, 23);
  fill("#5BA478");
  triangle(250, 98, 250, 50, 294, 23);

//tetradic color schema
  //fill("black")
  //circle(50,150,100);
  fill("#3AC5A9");
  triangle(93, 125, 49, 125, 72, 163);
  fill("#633AC5");
  triangle(51, 125, 7, 125, 29, 163);
  fill("#9CC53A");
  triangle(72, 163, 50, 125, 29, 163);
  fill("#C53A56");
  triangle(72, 163, 50, 200, 29, 163);

//own color schema
  //fill("black")
  //circle(150,150,100);
  fill("#52AD6B");
  triangle(150, 200, 150, 125, 108, 125);
  fill("#75BD88");
  triangle(150, 200, 150, 125, 192, 125);

//random color schema (green)
  //fill("black")
  //circle(250,150,100);
  fill(random(90, 150), random(50, 100), random(50, 100));
  triangle(294, 125, 250, 200, 207, 125);
  fill(random(90, 150), random(50, 100), random(50, 100));
  triangle(250, 200, 250, 150, 207, 125);
  fill(random(90, 150), random(50, 100), random(50, 100));
  triangle(250, 200, 250, 150, 294, 125)

  }


function draw() {

}

function keyPressed() {
	if (key === "S" || key === "s") {
		save("color-theme-melmellllll.png");
	}
	// make it possible to save the sketch as an image
}