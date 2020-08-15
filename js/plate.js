function drawPlate() {
  background(bgcolor);

  // Draws white & black outline
  rectMode(CORNER);
  strokeWeight(4);
  stroke(255);
  fill(0);
  rect(width / 2 - 266.6 * 0.98, height / 2 - 97, 533.3 * 0.98, 194, 15);

  // Draws blue rectangle
  noStroke();
  fill(0, 100, 255);
  rect(width / 2 - 266.6 * 0.95, height / 2 - 89, 533.3 * 0.95, 50, 10, 10, 0, 0);

  // Draws Brazilian flag
  rectMode(CORNER);
  strokeWeight(2);
  stroke(255);
  fill(0, 155, 58);
  rect(590, 115, 60, 42, 10, 10, 10, 10);
  noStroke();
  fill(254, 223, 0);
  quad(595, 136, 620, 120, 645, 136, 620, 152);
  fill(0, 39, 118);
  ellipseMode(RADIUS);
  ellipse(620, 136, 9.5);
  noFill();
  strokeWeight(3);
  stroke(255);
  arc(613, 144.5, 18, 10, PI + QUARTER_PI * 1.8, TWO_PI * 0.9);
  strokeWeight(1);
  point(622, 132);
  point(612, 137);
  point(620, 138);
  point(616, 139);
  point(624, 140);
  point(621, 141);
  point(624, 142);
  point(622, 143);
  point(616, 142);

  // 'Brasil' writings
  noStroke();
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  fill(255);
  textStyle(BOLD);
  textSize(24);
  textFont(BRFont);
  text('BRASIL', 400, 130, 100, 200);

  // 'Mercosul' writings
  fill(255);
  textStyle(NORMAL);
  textSize(12);
  textFont(BRFont);
  text('MERCOSUL', 200, 148, 100, 200);
  rectMode(CORNER);
  noFill();
  strokeWeight(1);
  stroke(255);
  arc(207, 144, 40, 8, PI, PI * 11 / 12 + HALF_PI + QUARTER_PI);
  fill(255);
  star(198, 131, 1, 3, 4);
  star(185, 122, 1, 3, 4);
  star(192, 117, 1, 3, 4);
  star(201, 119, 1, 3, 4);

  // Draws white rectangle
  fill(255);
  rect(width / 2 - 266.6 * 0.95, height / 2 - 38.9, 533.3 * 0.95, 128, 0, 0, 10, 10);

  // QR Code
  noSmooth();
  tint(255, 160);
  image(img, 155, 168);

  // BR
  smooth();
  noStroke();
  rectMode(CENTER);
  fill(0);
  textFont(plateFont);
  textSize(40);
  text('BR', 178, 258, 500, 500);
}