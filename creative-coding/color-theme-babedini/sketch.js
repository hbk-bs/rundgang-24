/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

//!HINT: This is only example code to get you started. You don't need to use it. 

// this is analogous

/** 
 * Does not change an reload ;(
 */

function setup() {
	createCanvas(500, 500);
	background(240);
	colorMode(HSB, 360, 100, 100, 100)
	angleMode(DEGREES)
	randomSeed(42);
	const baseColor = color(235, 100, 90);
	let h = hue(baseColor);
	const step = 60;
	let angle = 30;
	let radius = 80;
	let diam = 70;
	fill(baseColor);
	circle(width / 4, height / 4, (radius * 2) - diam)
	while (angle < 360) {
		h += step;
		fill(h % 360, 100, 100);
		const x = cos(angle) * radius + width / 4
		const y = sin(angle) * radius + height / 4
		circle(x, y, diam);
		angle += step;
	}
	{


		fill(80, 100, 100);
		rect(270, 270, 200, 100);

		const myRandomValue = random(200);
		const myRandomColor = color(myRandomValue)
		const myHue = hue(myRandomColor);
		console.log(myHue)
		fill(260, 100, 100);
		circle(370, 320, 50)
	}
	{ // @ff6347 said: why the closure?
		// let hue (random(40,60))// Grundfarbe
		//let hue 2 = (random (220,240))//gegenüber liegende von hue 1
		// let hue 3 (random (130,110))// Die Farbe welche sich mittig zwischen hue 1 und 2 befindet


		let h = 40;

		fill(h, 70, 100);

		rect(250, 50, 200, 30);
		h = (h + 120) % 360;
		fill(h, 70, 100);

		rect(260, 85, 200, 30);

		fill(130, 70, 100)

		rect(270, 120, 200, 30)


	}


}

function draw() {
	// draw runs all the time

}

function keyPressed() {
	if (key === "S" || key === "s") {
		save("color-theme-babedini.png");
	}
	// make it possible to save the sketch as an image
}