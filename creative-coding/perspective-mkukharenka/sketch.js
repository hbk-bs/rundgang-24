/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

/** 
comments by @ff6347
Thank you looks great.

It reminds me of the Stelenfeld in Berlin https://de.wikipedia.org/wiki/Denkmal_f%C3%BCr_die_ermordeten_Juden_Europas

Some ideas that come to my mind.

- After this week you should be able to do this fully generative, based soley on the size of your canvas. 

What if:

- the number of quads change each time the image renders?
- the point of view (pov) would be moving with the `mouseX` and `mouseY`?
- the pov is based on some physical input like the gaze tracking of the viewer?
- the pov is based on some object you place on a surface nect to the screen?
- the depth of the cubes varies?
*/


function setup() {
	const canvas = createCanvas(420, 420);
	canvas.parent("sketch");
	background(230);

	fill(80);
	quad(30, 130, 130, 130, 160, 160, 160, 190);
	fill(0);
	quad(130, 30, 190, 160, 160, 160, 130, 130);

	fill(185);
	quad(230, 160, 290, 30, 290, 130, 160, 260);
	fill(80);
	quad(260, 160, 290, 130, 390, 130, 260, 190);

	fill(80);
	quad(160, 130, 260, 130, 245, 160, 175, 160);

	fill(110);
	quad(30, 290, 160, 230, 160, 260, 130, 290);
	fill(0);
	quad(130, 290, 160, 260, 190, 260, 130, 390);

	fill(110);
	quad(260, 230, 390, 290, 290, 290, 260, 260);
	fill(185);
	quad(230, 260, 260, 260, 290, 290, 290, 390);

	fill(110);
	quad(175, 260, 245, 260, 260, 290, 160, 290);

	fill(0);
	quad(130, 160, 160, 175, 160, 245, 130, 260);
	fill(185);
	quad(260, 175, 290, 160, 290, 260, 260, 245);
	// describe sides of cubes

	fill(255);
	rect(30, 30, 100, 100);
	rect(30, 160, 100, 100);
	rect(30, 290, 100, 100);
	rect(160, 30, 100, 100);
	rect(160, 160, 100, 100);
	rect(160, 290, 100, 100);
	rect(290, 30, 100, 100);
	rect(290, 160, 100, 100);
	rect(290, 290, 100, 100);
	// describe front sides of cubes
}

function keyPressed() {
	if (key === "S" || key === "s") {
		save("perspective-mkukharenka.png");
	}
	// make it possible to save the sketch as an image
}

function draw() {
}
