/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

// !HINT: This is only example code to get you started. You don't need to use it. 


function setup() {
	createCanvas(300, 300);
	colorMode(HSB, 360, 100, 100, 100);
	noStroke();
	const step = width / 15;
	let angle = 0;
	let angleStep = 30;

	//unten - triadisch
	push();
	for (let x = 0; x < width; x += step) {
		fill(abs(angle % 360), 50, 90);
		console.log(abs(angle % 360));
		rect(x, 200, step, height / 3);
		angle += angleStep + 90; 
		// 100 + 30 = 360??? triadisch ;)
	}
	pop();

	//mitte - tetradisch
	push();

	for (let x = 0; x < width; x += step) {
		fill(abs(angle % 360), 50, 90);
		console.log(abs(angle % 360));
		rect(x, 100, step, height / 3);
		angle += angleStep * 3; // jupp 30 * 3 = 90
	}
	pop();

	//oben - analog
	push();
	for (let x = 0; x < width; x += step) {
		fill(abs(angle % 360), 50, 90);
		console.log(abs(angle % 360));
		rect(x, 0, step, height / 3);
		angle += angleStep; // 👍🏾
	}
	pop();

}

function draw() {
	// draw runs all the time
}

function keyPressed() {
	if (key === "S" || key === "s") {
		save("color-theme-LeonieManthey.png");
	}
	// make it possible to save the sketch as an image
}

//hello, i really tried, but i was sick last week.. i had two presentations to organize to monday too so there was very limited time for this.:(
//Next time better:)