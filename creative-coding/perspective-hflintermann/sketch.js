/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.


/** 
comments by @ff6347
Thank you I really like it. 

I also like the imperfection and abstraction. You could emphasis this a little more

What if the elements fade away in the depth? This could be achieved by drawing several elements with a little random offset and a lower alpha. So they look blured

*/


function setup() {
	// setup runs once
	const canvas = createCanvas(300, 400);
	canvas.parent("sketch");
	background(0);
  fill(100)
  strokeWeight(1)
  // letzte Türen
  //quad(160,165,165,160,165,182,160,179)
  //quad (140,165,135,160,135,182,140,179)
  //quad (145,165,155,165,155,179,145, 179)
  // lower diagonal line 
  line (0,350,175,220)
  // upper line
  line (175,220,175,0)
  // lower line 
  line (30,220,260,220)
  line (50, 400, 180 ,220)
  quad (175, 205,180,205,180,220,175,220)
  line( 175, 205,0,10)
  line (180,220, 280, 400)
  line (180,220, 240,400)
  line (180,205,280,0)
  
  //upper part
  fill (160)
  quad (175, 205,180,205, 280, 0, -10, 0 )
  fill (130)
  quad (175,205,180,205,255,50,35,50)
  fill (90)
  quad (175,205,180,205, 242, 75,59,75)
  fill (80)
  quad (175,205,180,205,235,90,73, 90)
  fill (70)
  quad (175,205,180,205,227,110,90,110)
  fill (60)
  quad (175,205,180,205, 225, 130, 108, 130)
  fill (50) 
  quad (175,205,180,205, 224,150, 126, 150)
  fill (30)
  quad (175, 205, 180, 205, 220,170, 145, 170)
  fill (10)
  quad (175,205,180,205, 227,180,155,180)
  fill (180)
  quad ( 60, 50,235, 50, 215, 90, 100,90 )
  line (215, 90, 215, 87)
  line (100, 90, 100, 87)
  line (100,87, 215, 87)
  line (100, 87, 65, 50)
  //right side 
  fill (120)
    quad (180,205,180,220,280,420,280,-20)
  fill (60)
  quad (180,205,180,220,260,372,260,30)
  fill(40)
  quad (180,205,180,220,240,340,240,75)
  fill (30)
  quad (180,205,180,220, 230, 322, 230, 92)
  fill (20)
  quad (180, 205, 180, 220, 220, 300, 220, 120 )
  fill (10)
  quad (180, 205, 180, 220, 208,275,208,140)
  fill (0)
  quad (180,205,180,220,200,260,200,160)
  //line (30,220,30,400)
  //left side
  line (50,360,250,360)
  line (280,20,280,380)
  line (260,70,260,330)
  line (240,100, 240, 300)
  fill(80)
 quad( 30,50,172,204,172,219,30,325)
  fill (65)
  quad (75,103,172,205,172,218,75,290)
  fill (40)
  quad (130, 160, 172, 205, 172, 218, 130, 250)
  fill (10)
  quad ( 150, 180,172,205,172,218, 150,233)
  //brett
  fill (150)
  strokeWeight (0)
  quad (20,350, 175,220,178,220,20,440)
  fill (190)
  quad (0,350,20,350,20,400,0,400)
  strokeWeight (1)
  line (0, 350,20,350)
  line (20,350,175,220)
  line (20,350, 20,360)
  line (20,360,175,222)
  line (50,380,250,380)
  line (82,380, 82, 360)
  line (225,380,225, 360)
  line (20,360,0,360)
  line (20,360, 20, 400)
  line ( 30,350,30,400)
  fill (150)
  //fenster
  quad (80,120,110,150, 110, 255, 80, 280)
  quad (150, 190, 160, 200, 160, 220, 150, 227)
  quad (120, 160,140, 185, 140, 235, 120, 250)
  line (140,185,137,185)
  line (137,185,120,164)
  line (137,185, 137,235)
  line (137,235, 140, 235 )
  line (137,235, 120, 247)
  line (160,200,157,200)
  line ( 157, 200, 150, 193)
  line (157,200,157,220)
  line (160, 220, 157, 220)
  line (157, 220, 150,225)
  line (110,150,105,150)
  line (105,150,105,255)
  line (110,255,105,255)
  line (105,255,80, 275)
  line ( 105,150, 80, 125)
  line ( 80, 125, 80, 275)
  //boden
  strokeWeight (1)
  quad (177,223,180,223,226,360, 80,360)
  fill(120)
  
  quad (177,222,180,222,214,320,109,320)
  fill(90)
  quad (177,222,180,222,205,300,123,300)
  fill(60)
  quad (177,222,180,222,197,280,137,280)
  fill (200)
  quad (82, 360, 225, 360, 225, 380, 82, 380)
  fill (20)
  //circle (320,210,200)
  fill (300)
  stroke (300)
  line (100,150,200,150)
  line (100, 150, 100, 280)
  line (100, 280, 200, 280)
  line (200, 280, 200, 150)
  line (150, 235, 185, 235)
  line (150, 235, 150, 185)
  line (150, 185, 185, 185)
  line (185, 185, 185, 235)
  //line (150, 235, 150,0)
}
  // letzte Türen

function draw() {
	// draw runs all the time
}

function keyPressed() {
	if(key === "s") save("perspective-hflintermann.png");
}