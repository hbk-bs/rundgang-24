/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

/**
comments by @ff6347
Thank you I really like it.

I like how you created the pixelart style on the corners. Great idea.
After this week it will be much easier to do this using loops?

Some ideas:

- What if the clock would really work?
- Little detail. Use `strokeCap` to change the end of the lines https://p5js.org/reference/#/p5/strokeCap


*/
function setup() {
  // setup runs once
  const canvas = createCanvas(578, 610);
  canvas.parent('sketch');
  background(255);
  strokeWeight(0);
  fill(205);
  quad(289, 350, 299, 350, 240, 610, 200, 610);
  fill(205);
  quad(289, 350, 299, 350, 299, 1, 289, 1);
  fill(220);
  quad(304, 1, 578, 1, 578, 345, 304, 345);
  fill(140);
  quad(299, 1, 304, 1, 304, 345, 299, 350);
  quad(299, 350, 304, 345, 250, 610, 240, 610);
  fill(220);
  quad(289, 1, 1, 1, 1, 345, 289, 345);
  fill(205);
  quad(1, 350, 1, 345, 299, 345, 299, 350);
  quad(304, 345, 303, 350, 578, 350, 578, 345);

  strokeWeight(2);
  stroke(120);
  line(1, 1, 85, 1);
  stroke(160);
  line(85, 1, 85, 20);
  stroke(255);
  line(1, 20, 85, 20);

  stroke(120);
  line(87, 1, 171, 1);
  stroke(160);
  line(171, 1, 171, 20);
  stroke(255);
  line(87, 20, 171, 20);

  stroke(120);
  line(173, 1, 256, 1);
  stroke(160);
  line(256, 1, 256, 20);
  stroke(255);
  line(173, 20, 256, 20);

  stroke(120);
  line(258, 1, 289, 1);
  stroke(255);
  line(258, 20, 289, 20);

  stroke(120);
  line(1, 22, 55, 22);
  stroke(160);
  line(55, 22, 55, 42);
  stroke(255);
  line(1, 42, 55, 42);

  stroke(120);
  line(57, 22, 142, 22);
  stroke(160);
  line(142, 22, 142, 42);
  stroke(255);
  line(57, 42, 142, 42);

  stroke(120);
  line(144, 22, 229, 22);
  stroke(160);
  line(229, 22, 229, 42);
  stroke(255);
  line(144, 42, 229, 42);

  stroke(120);
  line(231, 22, 289, 22);
  stroke(255);
  line(231, 42, 289, 42);

  stroke(120);
  line(1, 44, 40, 44);
  stroke(255);
  line(1, 64, 40, 64);

  stroke(120);
  line(1, 66, 40, 66);
  stroke(255);
  line(1, 86, 40, 86);

  stroke(150);
  line(1, 88, 40, 88);
  stroke(255);
  line(1, 110, 40, 110);

  stroke(180);
  line(1, 112, 40, 112);
  stroke(200);
  line(1, 132, 40, 132);

  stroke(180);
  line(1, 134, 40, 134);
  stroke(200);
  line(1, 154, 40, 154);

  stroke(180);
  line(1, 156, 40, 156);
  stroke(200);
  line(1, 176, 40, 176);

  stroke(180);
  line(1, 178, 40, 178);
  stroke(200);
  line(1, 198, 40, 198);

  stroke(200);
  line(1, 200, 40, 200);
  stroke(200);
  line(1, 220, 40, 220);

  stroke(255);
  line(1, 222, 40, 222);
  stroke(180);
  line(1, 242, 40, 242);

  stroke(255);
  line(1, 244, 55, 244);
  stroke(160);
  line(55, 244, 55, 264);
  stroke(180);
  line(1, 264, 55, 264);

  stroke(160);
  line(142, 244, 142, 264);
  stroke(180);
  line(57, 264, 142, 264);

  stroke(160);
  line(229, 244, 229, 264);
  stroke(180);
  line(144, 264, 229, 264);

  stroke(255);
  line(229, 244, 289, 244);
  stroke(180);
  line(146, 264, 289, 264);

  stroke(255);
  line(250, 222, 289, 222);
  stroke(180);
  line(250, 242, 289, 242);

  stroke(200);
  line(250, 200, 289, 200);
  stroke(200);
  line(250, 220, 289, 220);

  stroke(180);
  line(250, 178, 289, 178);
  stroke(200);
  line(250, 198, 289, 198);

  stroke(180);
  line(250, 156, 289, 156);
  stroke(200);
  line(250, 176, 289, 176);

  stroke(180);
  line(250, 134, 289, 134);
  stroke(200);
  line(250, 154, 289, 154);

  stroke(180);
  line(250, 112, 289, 112);
  stroke(200);
  line(250, 132, 289, 132);

  stroke(150);
  line(250, 88, 289, 88);
  stroke(255);
  line(250, 110, 289, 110);

  stroke(120);
  line(250, 66, 289, 66);
  stroke(255);
  line(250, 86, 289, 86);

  stroke(120);
  line(250, 44, 289, 44);
  stroke(255);
  line(250, 64, 289, 64);

  stroke(255);
  line(1, 266, 85, 266);
  stroke(160);
  line(85, 266, 85, 286);
  stroke(120);
  line(1, 286, 85, 286);

  stroke(255);
  line(87, 266, 171, 266);
  stroke(160);
  line(171, 266, 171, 286);
  stroke(120);
  line(87, 286, 171, 286);

  stroke(255);
  line(173, 266, 256, 266);
  stroke(160);
  line(256, 266, 256, 286);
  stroke(120);
  line(173, 286, 256, 286);

  stroke(255);
  line(258, 266, 289, 266);
  stroke(120);
  line(258, 286, 289, 286);

  stroke(255);
  line(1, 288, 55, 288);
  stroke(160);
  line(55, 288, 55, 308);
  stroke(120);
  line(1, 308, 55, 308);

  stroke(255);
  line(57, 288, 140, 288);
  stroke(160);
  line(140, 288, 140, 308);
  stroke(120);
  line(57, 308, 140, 308);

  stroke(255);
  line(142, 288, 225, 288);
  stroke(160);
  line(225, 288, 225, 308);
  stroke(120);
  line(142, 308, 225, 308);

  stroke(255);
  line(227, 288, 289, 288);
  stroke(120);
  line(227, 308, 289, 308);

  stroke(255);
  line(1, 310, 85, 310);
  stroke(160);
  line(85, 310, 85, 330);
  stroke(120);
  line(1, 330, 85, 330);

  stroke(255);
  line(87, 310, 172, 310);
  stroke(160);
  line(172, 310, 172, 330);
  stroke(120);
  line(87, 330, 172, 330);

  stroke(255);
  line(174, 310, 257, 310);
  stroke(160);
  line(257, 310, 257, 330);
  stroke(120);
  line(174, 330, 257, 330);

  stroke(255);
  line(259, 310, 289, 310);
  stroke(120);
  line(259, 330, 289, 330);

  stroke(255);
  line(1, 332, 55, 332);
  stroke(160);
  line(55, 332, 55, 344);

  stroke(255);
  line(57, 332, 140, 332);
  stroke(160);
  line(140, 332, 140, 344);

  stroke(255);
  line(142, 332, 225, 332);
  stroke(160);
  line(225, 332, 225, 344);

  describe(
    'Three lines drawn in grayscale on a gray canvas. They form the top, right, and bottom sides of a square.',
  );

  strokeWeight(6);
  stroke(100);
  fill(200);
  quad(38, 43, 250, 43, 250, 250, 38, 250);
  strokeWeight(4);
  stroke(140);
  quad(42, 47, 247, 47, 247, 247, 42, 247);
  strokeWeight(2);
  stroke(140);
  fill(130);
  quad(42, 47, 100, 47, 100, 100, 42, 100);
  fill(110);
  quad(42, 101, 150, 101, 150, 135, 42, 135);
  fill(67);
  quad(101, 47, 220, 47, 220, 100, 101, 100);
  fill(178);
  quad(221, 47, 247, 47, 247, 247, 221, 247);
  fill(110);
  quad(70, 136, 220, 136, 220, 180, 70, 180);
  fill(160);
  quad(42, 136, 69, 136, 69, 247, 42, 247);
  fill(200);
  quad(70, 220, 150, 220, 150, 247, 70, 247);
  fill(137);
  quad(151, 180, 220, 180, 220, 220, 151, 220);

  strokeWeight(2);
  stroke(140);
  line(150, 247, 220, 247);

  noFill();
  colorMode(RGB, 255, 255, 255, 7);
  strokeWeight(5);
  stroke(255, 255, 255, 0.3);
  circle(100, 100, 110);

  noFill();
  colorMode(RGB, 255, 255, 255, 6);
  strokeWeight(5);
  stroke(255, 255, 255, 0.3);
  circle(100, 100, 100);

  noFill();
  colorMode(RGB, 255, 255, 255, 5);
  strokeWeight(5);
  stroke(255, 255, 255, 0.3);
  circle(100, 100, 90);

  noFill();
  colorMode(RGB, 255, 255, 255, 4);
  strokeWeight(5);
  stroke(255, 255, 255, 0.3);
  circle(100, 100, 80);

  noFill();
  colorMode(RGB, 255, 255, 255, 3);
  strokeWeight(5);
  stroke(255, 255, 255, 0.4);
  circle(100, 100, 70);

  noFill();
  colorMode(RGB, 255, 255, 255, 2);
  strokeWeight(5);
  stroke(255, 255, 255, 0.4);
  circle(100, 100, 60);

  noFill();
  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(5);
  stroke(255, 255, 255, 0.3);
  circle(100, 100, 50);

  noFill();
  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(5);
  stroke(255, 255, 255, 0.4);
  circle(100, 100, 40);

  noFill();
  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(5);
  stroke(255, 255, 255, 0.4);
  circle(100, 100, 30);

  noFill();
  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(5);
  stroke(255, 255, 255, 0.4);
  circle(100, 100, 20);

  noFill();
  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(5);
  stroke(255, 255, 255, 0.4);
  circle(100, 100, 10);

  noFill();
  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(255, 255, 255, 0.4);
  circle(100, 100, 1);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.4);
  line(1, 1, 1, 344);

  colorMode(RGB, 255, 255, 255, 2);
  strokeWeight(4);
  stroke(0, 0, 0, 0.4);
  line(5, 1, 5, 344);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.4);
  line(1, 1, 289, 1);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.4);
  line(1, 5, 289, 5);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(1, 9, 289, 9);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.2);
  line(1, 13, 289, 13);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.1);
  line(1, 17, 289, 17);

  colorMode(RGB, 255, 255, 255, 2);
  strokeWeight(4);
  stroke(0, 0, 0, 0.4);
  line(289, 1, 289, 344);

  colorMode(RGB, 255, 255, 255, 2);
  strokeWeight(4);
  stroke(0, 0, 0, 0.2);
  line(285, 1, 285, 344);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(1, 344, 289, 344);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.2);
  line(1, 340, 289, 340);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.1);
  line(1, 336, 289, 336);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  quad(34, 39, 254, 39, 254, 254, 34, 254);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.2);
  quad(30, 35, 258, 35, 258, 258, 30, 258);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.2);
  quad(26, 31, 262, 31, 262, 262, 26, 262);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.1);
  quad(22, 27, 266, 27, 266, 266, 22, 266);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.1);
  quad(18, 23, 270, 23, 270, 270, 18, 270);

  fill(192);
  strokeWeight(0);
  quad(290, 350, 275, 350, 155, 610, 200, 610);

  fill(205);
  strokeWeight(0);
  quad(275, 350, 260, 350, 108, 610, 155, 610);

  fill(193);
  strokeWeight(0);
  quad(260, 350, 245, 350, 61, 610, 108, 610);

  fill(205);
  strokeWeight(0);
  quad(245, 350, 230, 350, 14, 610, 61, 610);

  fill(200);
  strokeWeight(0);
  quad(230, 350, 215, 350, 0, 570, 14, 610);

  fill(191);
  strokeWeight(0);
  triangle(1, 610, 1, 570, 14, 610);

  fill(205);
  strokeWeight(0);
  quad(215, 350, 200, 350, 0, 525, 0, 570);

  fill(200);
  strokeWeight(0);
  quad(200, 350, 185, 350, 0, 485, 0, 525);

  fill(190);
  strokeWeight(0);
  quad(185, 350, 170, 350, 0, 460, 0, 485);

  fill(205);
  strokeWeight(0);
  quad(170, 350, 155, 350, 0, 440, 0, 460);

  fill(192);
  strokeWeight(0);
  quad(155, 350, 140, 350, 0, 420, 0, 440);

  fill(200);
  strokeWeight(0);
  quad(140, 350, 125, 350, 0, 405, 0, 420);

  fill(190);
  strokeWeight(0);
  quad(125, 350, 110, 350, 0, 390, 0, 405);

  fill(192);
  strokeWeight(0);
  quad(110, 350, 95, 350, 0, 375, 0, 390);

  fill(200);
  strokeWeight(0);
  quad(95, 350, 75, 350, 0, 365, 0, 375);

  fill(205);
  strokeWeight(0);
  quad(75, 350, 50, 350, 0, 355, 0, 365);

  fill(195);
  strokeWeight(0);
  triangle(0, 350, 50, 350, 0, 355);

  colorMode(RGB, 255, 255, 255, 2);
  strokeWeight(4);
  stroke(0, 0, 0, 0.4);
  line(1, 348, 297, 348);

  colorMode(RGB, 255, 255, 255, 2);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(1, 352, 296, 352);

  colorMode(RGB, 255, 255, 255, 3);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(1, 356, 295, 356);

  colorMode(RGB, 255, 255, 255, 4);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(1, 360, 294, 360);

  colorMode(RGB, 255, 255, 255, 5);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(1, 364, 293, 364);

  colorMode(RGB, 255, 255, 255, 6);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(1, 368, 292, 368);

  colorMode(RGB, 255, 255, 255, 7);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(1, 372, 291, 372);

  colorMode(RGB, 255, 255, 255, 7);
  strokeWeight(4);
  stroke(0, 0, 0, 0.2);
  line(1, 376, 290, 376);

  colorMode(RGB, 255, 255, 255, 7);
  strokeWeight(4);
  stroke(0, 0, 0, 0.1);
  line(1, 380, 289, 380);

  strokeWeight(2);
  stroke(160);
  line(301, 360, 578, 360);

  strokeWeight(2);
  stroke(160);
  line(298, 380, 578, 380);

  strokeWeight(2);
  stroke(160);
  line(290, 410, 578, 410);

  strokeWeight(2);
  stroke(160);
  line(282, 450, 578, 450);

  strokeWeight(2);
  stroke(160);
  line(272, 500, 578, 500);

  strokeWeight(2);
  stroke(160);
  line(260, 560, 578, 560);

  strokeWeight(2);
  stroke(160);
  line(340, 350, 350, 610);

  strokeWeight(2);
  stroke(160);
  line(390, 350, 460, 610);

  strokeWeight(2);
  stroke(160);
  line(440, 350, 570, 610);

  strokeWeight(2);
  stroke(160);
  line(490, 350, 578, 460);

  strokeWeight(2);
  stroke(160);
  line(540, 350, 578, 385);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.2);
  line(304, 352, 578, 352);

  colorMode(RGB, 255, 255, 255, 2);
  strokeWeight(4);
  stroke(0, 0, 0, 0.4);
  line(303, 356, 578, 356);

  colorMode(RGB, 255, 255, 255, 2);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(302, 360, 578, 360);

  colorMode(RGB, 255, 255, 255, 3);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(301, 364, 578, 364);

  colorMode(RGB, 255, 255, 255, 4);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(300, 368, 578, 368);

  colorMode(RGB, 255, 255, 255, 5);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(299, 372, 578, 372);

  colorMode(RGB, 255, 255, 255, 6);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(298, 376, 578, 376);

  colorMode(RGB, 255, 255, 255, 7);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(297, 380, 578, 380);

  colorMode(RGB, 255, 255, 255, 7);
  strokeWeight(4);
  stroke(0, 0, 0, 0.2);
  line(296, 384, 578, 384);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(304, 349, 251, 610);

  colorMode(RGB, 255, 255, 255, 2);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(308, 349, 255, 610);

  colorMode(RGB, 255, 255, 255, 3);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(312, 349, 259, 610);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(304, 346, 304, 0);

  colorMode(RGB, 255, 255, 255, 2);
  strokeWeight(4);
  stroke(0, 0, 0, 0.2);
  line(308, 346, 308, 0);

  colorMode(RGB, 255, 255, 255, 3);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(308, 346, 308, 0);

  colorMode(RGB, 255, 255, 255, 4);
  strokeWeight(4);
  stroke(0, 0, 0, 0.4);
  line(312, 346, 312, 0);

  colorMode(RGB, 255, 255, 255, 5);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(316, 346, 316, 0);

  colorMode(RGB, 255, 255, 255, 6);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(320, 346, 320, 0);

  colorMode(RGB, 255, 255, 255, 3);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(304, 347, 578, 347);

  colorMode(RGB, 255, 255, 255, 4);
  strokeWeight(4);
  stroke(0, 0, 0, 0.4);
  line(304, 343, 578, 343);

  colorMode(RGB, 255, 255, 255, 4);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(304, 339, 578, 339);

  colorMode(RGB, 255, 255, 255, 5);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(304, 335, 578, 335);

  colorMode(RGB, 255, 255, 255, 6);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(304, 331, 578, 331);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.4);
  line(290, 0, 578, 0);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(304, 4, 578, 4);

  colorMode(RGB, 255, 255, 255, 2);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(304, 8, 578, 8);

  colorMode(RGB, 255, 255, 255, 3);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(304, 12, 578, 12);

  colorMode(RGB, 255, 255, 255, 4);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(304, 16, 578, 16);

  colorMode(RGB, 255, 255, 255, 5);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(304, 20, 578, 20);

  colorMode(RGB, 255, 255, 255, 6);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(304, 24, 578, 24);

  colorMode(RGB, 255, 255, 255, 7);
  strokeWeight(4);
  stroke(0, 0, 0, 0.2);
  line(304, 28, 578, 28);

  fill(160);
  strokeWeight(0);
  quad(0, 370, 190, 370, 80, 480, 0, 480);

  fill(130);
  strokeWeight(0);
  quad(190, 370, 190, 377, 80, 487, 80, 480);

  fill(100);
  strokeWeight(0);
  quad(0, 480, 80, 480, 80, 487, 0, 487);

  colorMode(RGB, 255, 255, 255, 2);
  strokeWeight(11);
  stroke(0, 0, 0, 0.3);
  line(185, 422, 195, 610);

  colorMode(RGB, 255, 255, 255, 2);
  strokeWeight(12);
  stroke(0, 0, 0, 0.3);
  line(79, 550, 80, 610);

  fill(100);
  strokeWeight(0);
  quad(73, 487, 80, 487, 80, 550, 73, 550);

  fill(200);
  strokeWeight(0);
  quad(80, 487, 85, 482, 85, 546, 80, 550);

  fill(200);
  strokeWeight(0);
  quad(185, 382, 190, 377, 190, 418, 185, 425);

  fill(100);
  strokeWeight(0);
  quad(180, 387, 185, 382, 185, 425, 180, 425);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(2);
  stroke(0, 0, 0, 0.4);
  line(184, 386, 184, 424);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(1);
  stroke(255, 255, 255, 0.6);
  line(190, 379, 190, 418);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(2);
  stroke(0, 0, 0, 0.6);
  line(79, 487, 79, 549);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(1);
  stroke(255, 255, 255, 0.6);
  line(85, 484, 85, 545);

  fill(190);
  strokeWeight(0);
  quad(0, 370, 140, 370, 20, 480, 0, 480);

  fill(120);
  strokeWeight(0);
  quad(0, 480, 20, 480, 20, 525, 0, 525);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(255, 255, 255, 0.5);
  line(0, 372, 186, 372);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(255, 255, 255, 0.4);
  line(0, 376, 182, 376);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(255, 255, 255, 0.3);
  line(0, 380, 178, 380);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(255, 255, 255, 0.2);
  line(0, 384, 174, 384);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(255, 255, 255, 0.1);
  line(0, 388, 170, 388);

  colorMode(RGB, 255, 255, 255, 2);
  strokeWeight(4);
  stroke(255, 255, 255, 0.1);
  line(0, 392, 166, 392);

  colorMode(RGB, 255, 255, 255, 3);
  strokeWeight(4);
  stroke(255, 255, 255, 0.1);
  line(0, 396, 162, 396);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(2);
  stroke(255, 255, 255, 0.5);
  point(188, 371);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(2);
  stroke(255, 255, 255, 0.4);
  point(184, 375);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(2);
  stroke(255, 255, 255, 0.3);
  point(180, 379);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(2);
  stroke(255, 255, 255, 0.2);
  point(176, 383);

  fill(120);
  strokeWeight(0);
  quad(410, 150, 540, 150, 540, 370, 410, 370);

  fill(180);
  strokeWeight(0);
  quad(400, 160, 410, 150, 410, 370, 400, 346);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(538, 153, 538, 367);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(534, 153, 534, 367);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.2);
  line(530, 153, 530, 367);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.2);
  line(526, 153, 526, 367);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.1);
  line(522, 153, 522, 367);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.1);
  line(518, 153, 518, 367);

  colorMode(RGB, 255, 255, 255, 2);
  strokeWeight(4);
  stroke(0, 0, 0, 0.1);
  line(514, 153, 514, 367);

  colorMode(RGB, 255, 255, 255, 2);
  strokeWeight(4);
  stroke(0, 0, 0, 0.1);
  line(510, 153, 510, 367);

  colorMode(RGB, 255, 255, 255, 3);
  strokeWeight(4);
  stroke(0, 0, 0, 0.1);
  line(506, 153, 506, 367);

  colorMode(RGB, 255, 255, 255, 3);
  strokeWeight(4);
  stroke(0, 0, 0, 0.1);
  line(502, 153, 502, 367);

  strokeWeight(2);
  stroke(0, 0, 0, 0.2);
  line(475, 151, 475, 370);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(541, 351, 578, 351);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(541, 355, 578, 355);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(541, 359, 578, 359);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.3);
  line(541, 363, 578, 363);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(4);
  stroke(0, 0, 0, 0.2);
  line(541, 367, 578, 367);

  colorMode(RGB, 255, 255, 255, 2);
  strokeWeight(3);
  stroke(0, 0, 0, 0.1);
  line(541, 370, 578, 370);

  fill(100);
  strokeWeight(0);
  quad(469, 270, 472, 270, 472, 290, 469, 290);

  fill(100);
  strokeWeight(0);
  quad(478, 270, 481, 270, 481, 290, 478, 290);

  fill(200);
  strokeWeight(5);
  stroke(180, 180, 180);
  circle(374, 78, 60);

  fill(200);
  strokeWeight(5);
  stroke(139);
  circle(370, 80, 60);

  fill(80);
  strokeWeight(0);
  quad(370, 80, 366, 75, 370, 55, 374, 75);

  fill(140);
  strokeWeight(0);
  quad(370, 80, 366, 75, 370, 65, 374, 75);

  strokeWeight(4);
  stroke(50);
  point(370, 80);
}

function draw() {
  // draw runs all the time
  //console.log('x', mouseX, 'y', mouseY);
}

function keyPressed() {
  if (key === 's') save('perspective-kamueller.png');
}
