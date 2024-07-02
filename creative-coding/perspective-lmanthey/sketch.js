// Keep these comments alive.
// They will help you while writing code.
/**
comments by @ff6347
Thank you I really like it.

I like the interactivity. The easter egg of the moon is nice.
I also like the little imperfections. Some more if this please.

After this week it should be possible for you to make this whole sketch generative.
What if:

- The starfield was not an image but generated

P.S. You are lucky JS if forgiving. The `img`variable is not initilized. Adding the //@ts-check comment reveals some errors
*/

//function preload() {
//  img = loadImage("./data/sternenhimmel.jpg");
//}
/*Bild hochgeladen: Sternenhimmel*/

function setup() {
  /*setup läuft nur ein Mal*/
  const canvas = createCanvas(500, 500);
}

function draw() {
  /*draw läuft die ganze Zeit*/
  //image(img, 0,0);
  /*Sternenhimmelbild als Hintergrund*/

  background(0, 0, 35, 25);
  //background mit Transparenz

  stroke(100);
  fill(100);
  ellipse(mouseX, mouseY, 90, 90);
  stroke(180);
  fill(180);
  ellipse(mouseX, mouseY, 60, 60);
  stroke(255);
  fill(255);
  ellipse(mouseX, mouseY, 40, 40);
  /*Mondbewegung*/

  var Sternenhimmel = {
    locationX: random(width),
    locationY: random(height),
    size: random(2, 1),
  };

  ellipse(mouseX, mouseY, Sternenhimmel.size, Sternenhimmel.size);
  ellipse(
    Sternenhimmel.locationX,
    Sternenhimmel.locationY,
    Sternenhimmel.size,
    Sternenhimmel.size,
  );
  //Sterne

  stroke(0);
  fill(100);
  beginShape();
  vertex(1, 60);
  vertex(1, 1);
  vertex(110, 1);
  vertex(200, 180);
  vertex(200, 224);
  endShape(CLOSE);
  /*Haus oben links Nr1 Seite*/

  stroke(30);
  strokeWeight(1);
  line(189, 215, 191, 162);
  line(175, 207, 180, 140);
  line(158, 192, 166, 115);
  line(138, 173, 147, 76);
  line(112, 150, 124, 29);
  line(86, 128, 100, 1);
  line(50, 100, 64, 1);
  line(1, 50, 7, 1);
  /*horizontale Linien für Fenster Haus1 Seite*/

  stroke(80);
  line(1, 30, 199, 217);
  line(10, 1, 199, 207);
  line(50, 1, 199, 195);
  line(83, 1, 199, 186);
  /*vertikale Linien für Fenster Haus*/

  stroke(0);
  fill(255);
  quad(1, 60, 1, 180, 92, 224, 200, 224);
  /*Haus oben links Nr1 Front*/

  stroke(30);
  line(78, 216, 188, 215);
  line(58, 206, 175, 205);
  line(28, 192, 158, 190);
  line(1, 176, 137, 173);
  line(1, 157, 113, 152);
  line(1, 136, 85, 130);
  line(1, 105, 49, 100);
  /*horizontale Linien für Fenster Haus1 Front*/

  stroke(160);
  line(1, 94, 183, 223);
  line(1, 121, 164, 223);
  line(1, 144, 141, 223);
  line(1, 165, 114, 223);
  /*vertikale Linien Fenster Haus1 Front*/

  stroke(0);
  fill(100);
  quad(300, 300, 300, 348, 380, 500, 500, 500);
  /*Haus unten rechts Nr2 Seite*/

  stroke(30);
  line(306, 357, 309, 304);
  line(315, 377, 322, 315);
  line(329, 400, 338, 334);
  line(346, 436, 363, 350);
  line(370, 482, 399, 367);
  line(410, 500, 437, 408);
  line(470, 500, 485, 460);
  /*horizontale Linien Fenster haus2 Seite*/

  stroke(80);
  line(301, 309, 456, 500);
  line(301, 324, 423, 500);
  line(301, 338, 399, 500);
  /*vertikale Linien Fenster Haus2 Seite*/

  stroke(0);
  fill(255);
  quad(360, 300, 300, 300, 500, 500, 500, 360);
  /*Haus unten rechts Nr2 Front*/

  line(480, 478, 500, 470);
  line(431, 431, 500, 410);
  line(392, 392, 500, 366);
  line(361, 361, 460, 344);
  line(337, 337, 422, 327);
  line(321, 321, 395, 316);
  line(309, 309, 377, 307);
  /*horizontale Linien Fenster Haus2 Front*/

  stroke(160);
  line(315, 301, 500, 446);
  line(335, 301, 500, 408);
  line(350, 301, 500, 380);
  /*vertikale Linien Fenster Haus2 Front*/

  stroke(0);
  fill(210);
  quad(120, 1, 1, 1, 140, 140, 196, 140);
  /*Haus oben links Nr3*/

  stroke(0);
  line(125, 125, 188, 125);
  line(104, 105, 177, 105);
  line(78, 78, 163, 78);
  line(45, 45, 145, 45);
  line(10, 10, 125, 10);
  /*horizontale Linien Fenster Haus3*/

  stroke(100);
  line(100, 1, 180, 140);
  line(70, 1, 165, 140);
  line(35, 1, 150, 140);
  /*vertikale Linien Fenster Haus3*/

  stroke(0);
  fill(200);
  quad(1, 180, 1, 260, 60, 256, 60, 208);
  /*Haus oben links Nr4*/

  line(50, 203, 50, 257);
  line(30, 195, 30, 257);
  line(5, 182, 5, 260);
  /*Horizontale Linien Fenster Haus4*/

  line(1, 244, 60, 246);
  line(1, 224, 60, 230);
  line(1, 200, 60, 216);
  /*vertikale Linien Fenster Haus4*/

  fill(255);
  quad(120, 1, 380, 1, 300, 160, 200, 160);
  /*Haus oben mitte Nr5*/

  line(190, 140, 310, 140);
  line(175, 110, 325, 110);
  line(150, 60, 350, 60);
  /*horizontale linien fenster haus5*/

  stroke(160);
  line(175, 1, 220, 160);
  line(250, 1, 250, 160);
  line(320, 1, 280, 160);
  /*vertikale linien fenster haus5*/

  stroke(0);
  fill(200);
  quad(440, 212, 440, 232, 500, 226, 500, 200);
  /*Haus rechts mitte Nr6*/

  line(450, 210, 450, 231);
  line(465, 208, 465, 230);
  line(485, 204, 485, 228);
  /*horizontale linien fenster haus6*/

  stroke(130);
  line(440, 219, 500, 209);
  line(440, 226, 500, 217);
  /*vertikale linien fenster haus6*/

  stroke(0);
  fill(255);
  quad(220, 360, 328, 360, 434, 500, 180, 500);
  /*Haus unten mitte Nr7*/

  line(215, 380, 344, 380);
  line(205, 410, 365, 410);
  line(194, 450, 395, 450);
  /*horizontale Linien fenster haus 7*/

  quad(380, 240, 380, 280, 500, 314, 500, 226);
  /*Haus rechts mitte Nr8*/

  line(380, 250, 500, 250);
  line(380, 260, 500, 270);
  line(380, 270, 500, 286);
  /*vertikale linie fenster haus 8*/

  stroke(0);
  strokeWeight(1);
  fill(100);
  quad(500, 1, 500, 120, 320, 216, 320, 180);
  /*Haus oben rechts Nr9 Front*/

  line(480, 20, 480, 130);
  line(420, 80, 420, 180);
  line(380, 120, 380, 200);
  line(350, 150, 350, 205);
  line(330, 170, 330, 215);
  /*horizontale linien fenster haus 9 front*/

  fill(255);
  quad(500, 120, 500, 200, 420, 216, 320, 216);
  /*Haus oben rechts Nr9 Seite*/

  line(330, 210, 450, 210);
  line(350, 200, 500, 201);
  line(380, 183, 500, 185);
  line(420, 162, 500, 166);
  line(480, 130, 500, 131);
  /*horizontale linien fenster haus 9 seite*/

  stroke(0);
  strokeWeight(1);
  beginShape();
  vertex(1, 500);
  vertex(120, 500);
  vertex(196, 360);
  vertex(196, 280);
  vertex(1, 380);
  endShape(CLOSE);
  /*Haus unten links Nr10 Front*/

  line(180, 290, 180, 390);
  line(150, 300, 150, 443);
  line(110, 320, 110, 500);
  line(40, 350, 40, 500);
  /*horizontale linien fenster haus 10 front*/

  fill(100);
  quad(1, 300, 1, 380, 196, 280, 100, 280);
  /*Haus oben rechts Nr10 Seite*/

  line(176, 290, 60, 287);
  line(150, 305, 1, 300);
  line(110, 325, 1, 320);
  line(40, 360, 1, 357);
  /*horizontale linien fenster haus 10 seite*/
}

function keyPressed() {
  if (key === 's') save('perspective-lmanthey.png');
}
