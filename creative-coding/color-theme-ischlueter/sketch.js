/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

//!HINT: This is only example code to get you started. You don't need to use it. 

// this is analogous



//function setup() {
	//randomSeed(42);
	// setup runs once
	//const scaler = 1;
	//const canvas = createCanvas(400 * scaler, 225 * scaler);
	//canvas.parent("sketch");
	//colorMode(HSB, 360, 100, 100, 100);
	//let angle = random(0, 360);
	//let angleStep = 30;
	//let sat = 40;
	//let saturationStep = 0;
	//let light = 70;
	//let lightnessStep = 0;
	//let colors = [];
	//let i = 0;
	// generate the colors
	// !HINT: Create your own rules how they should change.
	// Add a little random to it. Not to much. Just a little
	//while (i < 4) {
		//colors.push(color(angle % 360, sat, light, 100));
		//console.log(i, angle);
		//angle += angleStep;
		//sat -= saturationStep;
		//light += lightnessStep;
		//i++;
	//}


	//noStroke();
	// display the colors
	// !HINT: Create your own style how to use/display them do something more interesting then I did.
	//for (let i = 0; i < colors.length; i++) {
		//fill(colors[i]);
		//rect((width / colors.length) * i, 0, width / colors.length, height);
	//}
//}

//function draw() {
	// draw runs all the time
//}
function keyPressed() {
	if (key === "S" || key === "s") {
		save("color-theme-ischlueter.png");
	}
	// make it possible to save the sketch as an image
}

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent("sketch");
  colorMode(HSB, 360, 100, 100, 100);
  


  background(0, 0, 0);

  let hue = random(360);
  let saturation = random(40, 60);
  let brightness = random(70, 90);

	let h = height/2;
	let w = width/2;
	let g = 50;
  fill(hue, saturation, brightness);
  rect( g, g, w -g, h-g);
  fill(hue + 20, saturation, brightness);
  rect( w, g, w -g, h -g);

  fill(hue + 30, saturation, brightness); 
	
  rect(g, h, w -g, h -g);

  fill(hue + 40, saturation, brightness);
	
  rect(w, h, w -g, h-g);
}




