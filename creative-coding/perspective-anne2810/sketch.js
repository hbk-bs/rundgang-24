/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.


/** 
comments by @ff6347
Thank you I really like it. 
Some ideas here:

- We will learn in the next few days how to repeat things. Would be nice to identify the repeating patterns here and replace them with loops
- What if the street lights would flicker a little and cast a light cone
- What about a starfield?

*/

function setup() {
	// setup runs once
	const canvas = createCanvas(300,300);
	canvas.parent("sketch");
  background(20);



  
  // street
  fill(70);
  quad(0,300,300,300,160,150,140,150);
  fill(30)
  triangle(50,247,70,225,50,225)
  triangle(300,300,235,230,300,230)
 //street black
  fill(0);
  quad(30,300,270,300,160,150,140,150);
  //street white
  fill(210);
  quad(149,150,150,150,156,300,144,300);
  //gaps
  fill(0)
  quad(140,270,160,270,160,260,140,260);  
  quad(140,230,160,230,160,235,135,235);
  quad(140,207,140,210,160,210,160,207);
  quad(140,190,140,191,160,191,160,190);
  
  //guide line 
  //line(0,0,150,150);
  //line(300,0,150,150);
  //line(0,50,150,150);
  //line(150,150,300,20);
  //line(150,150,300,240);
  //line(0,60,150,150)
  
  //left side house 1
  fill(110)
  quad(0,0,0,300,50,247,50,45);
  //windows
  fill(210)
  quad(0,20,0,280,40,242,40,50);
  line(0,40,40,65);
  line(0,60,40,80);
  line(0,80,40,95);
  line(0,100,40,110);
  line(0,120,40,125);
  line(0,140,40,140);
  line(0,160,40,155);
  line(0,180,40,170);
  line(0,200,40,185);
  line(0,220,40,200);
  line(0,240,40,215);
  line(0,260,40,230);
  line(30,43,30,251);
  line(17,33,17,263);
  
  //house 2
  fill(150);
  quad(70,70,70,225,90,204,90,90);
  fill(10);
  quad(50,70,50,225,70,225,70,70);
  //windows
  fill(170);
  quad(75,80,75,213,87,203,87,92);
  line(80,85,80,209);
  line(84,89,84,206);
  line(75,90,87,100);
  line(75,100,87,108);
  line(75,110,87,116);
  line(75,120,87,125);
  line(75,130,87,134);
  line(75,140,87,142);
  line(75,150,87,150);
  line(75,160,87,158);
  line(75,170,87,166);
  line(75,180,87,173);
  line(75,190,87,182);
  line(75,200,87,191);
  


  
  //house 3
  fill(80)
  quad(90,112,90,204,110,182,110,125);
  //house 4
  fill(70)
  quad(110,182,110,110,120,120,120,171);
  fill(30)
  quad(90,110,90,112,110,130,110,110);
  //house 5
  fill(40)
  quad(120,120,120,171,132,158,132,132);
  //house 6
  fill(20)
  quad(132,158,132,132,140,140,140,151);
  

  // right side
  //house 1 
  fill(100);
  quad(235,65,235,230,300,230,300,65);
  fill(170)
  quad(216,85,216,210,235,230,235,65);
  //windows
  fill(170);
  quad(240,70,240,225,300,225,300,70);
  line(290,70,290,225);
  line(280,70,280,225);
  line(270,70,270,225);
  line(260,70,260,225);
  line(250,70,250,225);
  
  line(240,110,300,110);
  line(240,150,300,150);
  line(240,190,300,190);
  
  fill(210);
  quad(218,88,218,208,230,220,230,75);
  line(225,215,225,80);
  line(222,211,222,84);
  line(220,209,220,86);

  line(218,120,230,110);
  line(218,150,230,150);
  line(218,183,230,190)
  
  //house 2
  fill(120)
  quad(200,108,200,193,216,210,216,94);
  //house 3
  fill(40)
  quad(190,120,190,182,200,193,200,111);
  //house 4
  fill(95);
  quad(175,124,175,165,190,182,190,110);
  fill(60)
  quad(190,110,190,120,200,115,200,110);
  //house 5
  fill(50)
  quad(160,140,160,150,175,165,175,124);

  //street lamps
  fill(150);
  strokeWeight(4);
  line(260,280,260,220);
  line(260,220,240,205)
  strokeWeight(0);
  fill(255);
  circle(240,205,12);
  
  strokeWeight(3);
  line(100,200,100,170);
  line(100,170,110,157);
  strokeWeight(0)
  fill(250);
  circle(110,157,8)

  strokeWeight(2);
  line(177,170,177,160);
  line(177,160,172,155);
  strokeWeight(0)
  fill(240);
  circle(172,155,4)

  strokeWeight(2);
  line(132,160,132,155);
  line(132,155,135,150);
  strokeWeight(0)
  fill(220);
  circle(135,150,3)

  strokeWeight(1);
  line(164,153,164,150);
  line(164,150,162,148);
  strokeWeight(0)
  fill(210);
  circle(162,148,2)


  
  
  //function keyPressed() {
    //save("sketch.png");



}

function draw() {
	// draw runs all the time
}

function keyPressed() {
	if(key === "s") save("perspective-anne2810.png");
}