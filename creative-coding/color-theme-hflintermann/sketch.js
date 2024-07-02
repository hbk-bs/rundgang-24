/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

// !HINT: This is only example code to get you started. You don't need to use it. 

// this is analogous
// ich wollte weitere rectangles einfügen, diese werden aber nicht angezeigt???



function setup() {
	randomSeed(23);
	// setup runs once
	const scaler = 1;
	const canvas = createCanvas(500 * scaler, 500 * scaler);
	background(255 * scaler);
	canvas.parent("sketch");
	colorMode(HSB, 360, 100, 100, 100);

  fill(0)
  rect (0, 420, 125, 125)

	/** 
	* @param angleStep {Number}
	* @param saturationStep {Number}
	* @param lightnessStep {Number}
	* @param angle {Number}
	*/
	let colors = createColors(
		50,
		5,
		-5,
		271
	);

	drawColors(colors, 0, 100);

	let colors2 = createColors(
		random(50,100),
		random (5, 20),
		5,
		230);

	drawColors(colors2, 0, 270);
  
  let colors3 = createColors(
    random(30,60),
    10,
    100,
    330);
  drawColors(colors3, 0, 350);

  let colors4 = createColors(
    random (30,60),
    random (10,20),
    100,
    75,
  );
  drawColors(colors4, 0, 420);
}

/** 
	* @param colors {Array<p5.Color>}
		* @param x {Number}
	* @param y {Number}
	*/
function drawColors(colors, x, y) {
	push();
	noStroke();
	translate(x, y);
	fill(0);
	rect(0, 0, width, 100);
  fill(271, 54, 100);
	
  rect (0,0, width/colors.length, 200);
  fill (321, 49, 97)
	
  rect (125, 0, width/ colors.length, 200)
	
	fill(11, 44, 90)
    rect (250, 0, width/ colors.length, 200)
  fill (61, 39, 85)
	
  rect (375, 0, width/ colors.length, 200)
  fill (75, 74, 100)
	
  rect (0, 300, width/colors.length, 200)
  fill(0,0,0)
	
  rect (0, 300, width/colors.length, 200)
	
      for (let i = 0; i < colors.length; i++) {
		fill(colors[i]);
		const localX = (width / colors.length) * i
		console.log((width / colors.length))
		const diam = width / colors.length
		circle(localX + diam / 2, 0, diam)
	}
	pop()
}


function createColors(
	angleStep,
	saturationStep,
	lightnessStep,
	angle
) {
	let sat = 54;
	let light = 100;
	let colors = [];
	let i = 0;

	while (i < 4) {
		colors.push(color(angle % 360,
			sat,
			light,
			100));
		//console.log(i, angle);
		angle += angleStep;
		sat -= saturationStep;
		light += lightnessStep;
		i++;
	}
	return colors;

  fill(0)
  rect (0, 420, 125, 125)
}



function draw() {
	// draw runs all the time
}

function keyPressed() {
	if (key === "S" || key === "s") {
		save("color-theme-hflintermann.png");
	}
	// make it possible to save the sketch as an image
}