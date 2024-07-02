/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

// !HINT: This is only example code to get you started. You don't need to use it. 

// this is analogous

function setup() {
  createCanvas(400, 400);

  colorMode(HSB)


  const scaler = 1
  const canvas = createCanvas(500 * scaler, 500 * scaler);


  //most important/relevant colorschemes take up most place


  //Red Center Square  MAIN COLOR
  fill(2, 100, 100)
  rect(200, 200, 200)

  //Green Button// COMPLEMENTARY COLORSCHEME (C.S)
  fill(116, 100, 100)
  circle(300, 300, 70)

  //Arms//

  //Right Arm// MONOCHROMATIC DARK C.S

  //Bottom
  fill(8, 70, 98)
  rect(400, 200, 100, 50)

  //Top
  fill(8, 40, 98)
  rect(450, 130, 50, 70)

  //Left Arm// MONOCHROMATIC DARK C.S

  //Top
  fill(8, 100, 60)
  rect(100, 130, 50, 70)

  //bottom
  fill(8, 100, 85)
  rect(100, 200, 100, 50)

  //Legs// TRIAD/PRIMARY C.S

  //Left Leg
  fill(235, 100, 100)
  rect(220, 400, 70, 100)

  //Right Leg
  fill(57, 100, 100)
  rect(310, 400, 70, 100)

  //Head// ANALOGOUS C.S

  //Robot head
  fill(14, 100, 98)
  rect(250, 100, 100)

  //Eyes//

  //Left eye 
  fill(336, 100, 96)
  circle(280, 150, 25)

  //Right eye
  fill(336, 100, 96)
  circle(320, 150, 25)

  //Mowhawk
  fill(35, 100, 98)
  rect(290, 50, 25, 50)


}

function keyPressed() {
	if (key === "S" || key === "s") {
		save("colortheme-Diane1931.png");
	}
	// make it possible to save the sketch as an image
}