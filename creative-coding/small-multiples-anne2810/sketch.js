/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// Keep these comments alive.
// They will help you while writing code.

/**
 * This feels like you are submitting my code for review.
 */

let area = 15; //  area of the blocks
let num = 3; // number of circles in one block
let gutter = 5; // the gutter between blocks
let dia = 2; // the diameter of the circles
let blocks = []; // will hold all the blocks

function setup() {
  createCanvas(300, 300);

  blocks = [];

  let stepx = gutter + area / 2; // calc the steps per block x
  let stepy = gutter + area / 2; // calc the steps per block y

  // create coordiantes for each block
  // and create blocks
  for (let x = stepx; x < width; x += width / stepx) {
    // loop the x axis
    for (let y = stepy; y < height; y += height / stepy) {
      // loop the y axis

      // creation of blocks
      blocks.push(new Block(x, y, dia, area, num));
    }
  }
}

function draw() {
  background(0);
  // loop all the blocks in the list and display them
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].display(); // call the internal display function of each block
  }

  noLoop(); // don't loop everything for now
}

class Block {
  constructor(x, y, dia, area, num) {
    this.x = x; // the blocks x
    this.y = y; // the blocks y
    this.num = num; // the number of circles
    this.area = area; // the area to cover
    this.dia = dia; // the diameter of the circles
    this.coordinates = this.coords(); // initalize the coordiantes of the circles
  }
  // calculation for our coordiantes for the circles
  coords() {
    let coordinates = [];

    // loop the number of circles
    for (let j = 0; j < this.num; j++) {
      // add them to the list
      coordinates.push(
        createVector(
          random(-this.area / 2, this.area / 2),
          random(-this.area / 2, this.area / 2),
        ),
      );
    }

    return coordinates;
  }

  // show the blocks
  display() {
    ellipseMode(CENTER); // draw them from the center

    push(); // offset the matrix to x/y
    translate(this.x, this.y);

    // loop the coords of the circles
    for (let i = 0; i < this.coordinates.length; i++) {
      let p = this.coordinates[i]; // isolate

      // connect the last one to the first one
      stroke(255);
      if (i !== this.coordinates.length - 1) {
        line(p.x, p.y, this.coordinates[i + 1].x, this.coordinates[i + 1].y); // the line
      } else {
        line(p.x, p.y, this.coordinates[0].x, this.coordinates[0].y);
      }
      fill(255);
      circle(p.x, p.y, this.dia); // the circles
    }

    pop();
  }
}
