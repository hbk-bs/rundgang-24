/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

// !HINT: This is only example code to get you started. You don't need to use it. 

// this is analogous



function setup() {
	const canvas = createCanvas(200, 700);
	canvas.parent("sketch");
	background(255);
	ellipseMode(CENTER);
	colorMode(HSB, 360, 100, 100);
	const step = 40;
	const stepII = 25;
	const angleStep = 20;
	const myColor = random(0, 360); // better give it a meningfull name. It is not a color per se. It is the hue you will use for the color ;)
	const mySecondColor = myColor + 180;
	const myThirdColor = myColor - 180;
	const barrierI = 360 - angleStep;
	const barrierII = 360 - angleStep * 2;
	const myFourthColor = myColor - barrierI;
	const myFifthColor = myColor - barrierII;
	let saturation = 100;

	//Monochromatic
	for (let i = width; i > 0; i -= step) {
		noStroke();
		fill(myColor, saturation, 100);
		circle(width / 2, height / 7, i);
		saturation = saturation - stepII;
	}

	//Complementary
	fill(myColor, 100, 100);
	rect(0, height / 2.8, width / 2, height / 3.5);

	if (myColor > 180) {
		fill(myThirdColor, 100, 100);
		rect(width / 2, height / 2.8, width / 2, height / 3.5);
	}
	else {
		fill(mySecondColor, 100, 100);
		rect(width / 2, height / 2.8, width / 2, height / 3.5);
	}

	//Analogous
	fill(myColor, 100, 100);
	circle(width / 2, height / 1.3, width / 3);

	if (myColor > barrierI) {
		fill(myFourthColor, 100, 100);
		circle(width / 2, height / 1.2, width / 3);
		fill(myFourthColor + angleStep, 100, 100);
		circle(width / 2, height / 1.1, width / 3);
	}
	else if (myColor > barrierII) {
		fill(myColor + angleStep, 100, 100);
		circle(width / 2, height / 1.2, width / 3);
		fill(myFifthColor, 100, 100);
		circle(width / 2, height / 1.1, width / 3);
	}
	else {
		fill(myColor + angleStep, 100, 100);
		circle(width / 2, height / 1.2, width / 3);
		fill(myColor + angleStep * 2, 100, 100);
		circle(width / 2, height / 1.1, width / 3);
	}

}

function draw() {
	// draw runs all the time
}

function keyPressed() {
	if (key === "S" || key === "s") {
		save("color-theme-mcernota.png");
	}
	// make it possible to save the sketch as an image
}