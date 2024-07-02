/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

let angle = 0;

function setup() {
	const canvas = createCanvas(400, 400);
	canvas.parent("sketch");
	background(230);
	colorMode(HSB, 360, 100, 100, 100);
	angleMode(DEGREES);
	let side = 170;
	let n = random(0, 180)

	//analogous
	fill(angle + n, 100, 100);
	rect(20, 20, side, side);
	fill(angle + n, 100, 60);
	circle(90, 90, side * 2 / 3);
	fill(angle + 15 + n, 100, 75);
	arc(190, 190, side * 4 / 3, side * 4 / 3, 180, 270, PIE);
	fill(angle + 5 + n, 100, 85);
	triangle(20, 190, 190, 120, 190, 190);
	fill(angle + n, 100, 90);
	triangle(20, 80, 20, 190, 190, 190);
	fill(angle + n, 100, 100);
	circle(120, 150, side / 4);

	//complementary
	
	fill(angle + n, 100, 100);
	rect(210, 20, side, side);
	fill((angle + 180 + n), 100, 100);
	circle(280, 90, side * 2 / 3);

	
	fill((angle + 15 + n), 100, 70);
	arc(380, 190, side * 4 / 3, side * 4 / 3, 180, 270, PIE);
	fill((angle + 30 + n), 100, 80);
	
	triangle(210, 190, 380, 120, 380, 190);
	fill((angle + 40 + n), 100, 95);
	
	triangle(210, 80, 210, 190, 380, 190);
	fill((angle + 160 + n), 100, 100);
	circle(310, 150, side / 4);
 

	//triadic
	fill(angle + n, 100, 100);
	rect(20, 210, side, side);
	fill(angle + 120 + n, 100, 100);
	circle(90, 280, side * 2 / 3);
	fill(angle + 15 + n, 100, 80);
	arc(190, 380, side * 4 / 3, side * 4 / 3, 180, 270, PIE);
	fill(angle + 230 + n, 100, 85);
	triangle(20, 380, 190, 310, 190, 380);
	fill(angle + 220 + n, 100, 100);
	triangle(20, 270, 20, 380, 190, 380);
	fill(angle + 100 + n, 100, 100);
	circle(120, 340, side / 4);

	//tetradic
	fill(angle + n, 100, 100);
	rect(210, 210, side, side);
	fill(angle + 90 + n, 100, 100);
	circle(280, 280, side * 2 / 3);
	fill(angle + 15 + n, 100, 85);
	arc(380, 380, side * 4 / 3, side * 4 / 3, 180, 270, PIE);
	fill(angle + 280 + n, 100, 80);
	triangle(210, 380, 380, 310, 380, 380);
	fill(angle + 165 + n, 100, 100);
	triangle(210, 270, 210, 380, 380, 380);
	fill(angle + 80 + n, 100, 100);
	circle(310, 340, side / 4);


}

function keyPressed() {
	if (key === "S" || key === "s") {
		save("colortheme-mkukharenka.png");
	}
	// make it possible to save the sketch as an image
}