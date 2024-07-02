/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// Keep these comments alive.
// They will help you while writing code.

/*
 * @TODO: write comments
 */

/**
 * If you have no idea what to do you could ask me.
 * This sketch is my a more advanced version of what we did in the seminar.
 * I'm always open for questions.
 */

let area = 40; // the area for the blocks
let num = 4; // the number of rects in one block
let gutter = 2; // the gutter between blocks
let w = 3; // the width of one rect in a block
let h = 3; // the height of one rect in a block
let blocks = []; // will hold all the blocks

/**
 * The setup is executed once
 */
function setup() {
  createCanvas(480, 480); // the size of the window

  // init the list
  blocks = [];

  let stepx = gutter + area / 10; // calc the steps per block x
  let stepy = gutter + area / 10; // calc the steps per block y

  // create coordiantes for each block
  // and create blocks
  for (let x = stepx; x < width; x += width / stepx) {
    // loop the x axis
    for (let y = stepy; y < height; y += height / stepy) {
      // loop the y axis

      // simple creation of blocks
      //blocks.push(new Block(x, y));

      // extend creation of blocks
      blocks.push(new Block(x, y, w, h, area, num));

      // console.log(x + " || " + y); // just to see where the coords are
    } // end of y loop
  } // end of x loop
} // end of setup

/**
 * The draw executed all the time
 * in this case everything could take place in the setup
 * but we still do it here
 */
function draw() {
  background(255); // white background

  // loop all the blocks in the list and display them
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].display(); // call the internal display function of each block
  } // end of i loop

  // saveCanvas('out.png'); // save an image
  noLoop(); // don't loop everything for now
}

/**
 * The Block class
 * each one is a set of rectangles
 * connected by lines
 */
class Block {
  constructor(x, y, w, h, area, num) {
    this.x = x; // the blocks x
    this.y = y; // the blocks y
    this.num = num; // the number of rects
    this.area = area; // the area to cover
    this.h = h; // the rects height
    this.w = w; // the rects width
    this.coordinates = this.coords(); // initalize the coordiantes of the rectangles
  }

  // we calc our coordiantes for the rectangels
  coords() {
    let coordinates = []; // init the list

    // loop the number of rects
    for (let j = 0; j < this.num; j++) {
      // add them to the list
      coordinates.push(
        createVector(
          random(-this.area / 1, this.area / 1),
          random(-this.area / 1, this.area / 1),
        ),
      );
    }

    return coordinates;
  }

  // we show our block
  display() {
    rectMode(CENTER); // draw them from the center

    push(); // offset the matrix to x/y
    translate(this.x, this.y);

    fill(200);

    // loop the coords of the rects
    for (let i = 0; i < this.coordinates.length; i++) {
      let p = this.coordinates[i]; // isolate

      // if we have the last one we want to connect to the first one
      if (i !== this.coordinates.length - 1) {
        line(p.x, p.y, this.coordinates[i + 1].x, this.coordinates[i + 1].y); // draw the line
      } else {
        line(p.x, p.y, this.coordinates[0].x, this.coordinates[0].y);
      }

      rect(p.x, p.y, this.w, this.h); // draw the rect
    }

    pop(); // reset the matrix
  }
}

//
