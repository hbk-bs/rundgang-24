/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

// this is analogous



function setup() {
	randomSeed(42);
	// setup runs once
	const scaler = 1;
	const myCanvas = createCanvas(1600, 400);
	background(0);

	//myCanvas.parent("sketch");

	colorMode(HSB, 190, 100, 100, 150);

	let angle = random(30, 490);
	let angleStep = 80;
	let sat = 55;
	let saturationStep = 0;
	let light = 80;
	let lightnessStep = 4;
	let colors = [];
	let i = 0;




	// generate the colors
	while (i < 6) {
		colors.push(color(angle % 190, sat, light, 200));
		//console.log(i, angle);
		angle += angleStep;
		sat -= saturationStep;
		light += lightnessStep;
		i++;



	}


	background(colors[4]);

	noStroke();
	let stepX = 45, stepY = 30, triangleWidth = width / 4;


	for (let i = 0; i < colors.length - 1; i++) {

		fill(colors[i]);
		for (let j = 0; j < 4; j++) {
			triangle(0 + i * stepX + j * triangleWidth, height - i * stepY,
				triangleWidth / 2 + j * triangleWidth, 0 + i * stepY,
				triangleWidth - i * stepX + j * triangleWidth, height - i * stepY);
		}
	}
}

function draw() {
	// draw runs all the time
}

function keyPressed() {
	if (key === "S" || key === "s") {
		save("color-theme-YOUR USERNAME HERE.png");
	}
	// make it possible to save the sketch as an image
}
