let fontBR;
let fontPlaca;

let placas;
let originais;

let w = 800;
let h = 400;

let base = w / 3 * 2;
let altura = h / 2;

let bgcolor;

let generatedPlates = [];
let generatedWords = [];

let iterator = 0;

let img;

let buttonNew;
let buttonBack;
let buttonForward;

function preload() {
  fontBR = loadFont('assets/NotoSansKR-Black.otf');
  fontPlaca = loadFont('assets/Oswald-SemiBold.ttf');

  // Plates based on a Python program-generated .txt files
  placas = loadStrings('placas.txt');
  originais = loadStrings('originais.txt');

  img = loadImage('assets/qr.gif');
}

function setup() {
  bgcolor = color(247, 249, 249);
  createCanvas(w, h);
  //background(176, 142, 255);
  background(bgcolor);

  // Creates randomize button
  buttonNew = createButton('Aleatorizar!');
  //buttonNew.position(19, 19);
  buttonNew.class('new');
  buttonNew.mousePressed(writeWord);

  buttonBack = createButton('Voltar');
  //buttonBack.position(29, 49);
  buttonBack.class('navigation');
  buttonBack.mousePressed(back);

  buttonForward = createButton('Avançar');
  //buttonForward.position(29, 69);
  buttonForward.class('navigation');
  buttonForward.mousePressed(forward);

  // Writes first word on launch
  writeWord();
}

function draw() {
  if (iterator == 0) {
    buttonForward.attribute('disabled', 'true');
  } else {
    buttonForward.removeAttribute('disabled');
  }

  if (iterator == generatedPlates.length - 1) {
    buttonBack.attribute('disabled', 'true');
  } else {
    buttonBack.removeAttribute('disabled');
  }
}

function drawPlate() {

  background(bgcolor);

  // Draws white & black outline
  rectMode(CORNER);
  strokeWeight(4);
  stroke(255);
  fill(0);
  rect(width / 2 - base * 0.98 / 2, height / 2 - altura * 0.97 / 2, base * 0.98, altura * 0.97, 15);

  // Draws blue rectangle
  noStroke();
  fill(0, 100, 255);
  rect(width / 2 - base * 0.95 / 2, height / 2 - altura * 0.89 / 2, base * 0.95, altura * 0.25, 10, 10, 0, 0);

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
  textFont(fontBR);
  text('BRASIL', 400, 130, 100, 200);

  // 'Mercosul' writings
  fill(255);
  textStyle(NORMAL);
  textSize(12);
  textFont(fontBR);
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
  rect(width / 2 - base * 0.95 / 2, height / 2 - altura * 0.389 / 2, base * 0.95, altura * 0.64, 0, 0, 10, 10);

  // QR Code
  noSmooth();
  tint(255, 160);
  image(img, 155, 168);

  // BR
  smooth();
  noStroke();
  rectMode(CENTER);
  fill(0);
  textFont(fontPlaca);
  textSize(40);
  text('BR', 178, 258, 500, 500);
}

function writeWord() {
  let randomNumber = Math.trunc(random(0, placas.length));
  let plate = placas[randomNumber];
  let original = originais[randomNumber];

  // Redraws plate
  drawPlate();

  // Plate word with numbers
  rectMode(CENTER);
  fill(0);
  textFont(fontPlaca);
  textSize(100);
  text(plate, 417, 200, 500, 500);
  if (generatedPlates.unshift(plate) > 10) {
    generatedPlates.pop();
  }

  // Original word
  textFont('Helvetica');
  textSize(50);
  text(original, 400, 350, 500, 500);
  if (generatedWords.unshift(original) > 10) {
    generatedWords.pop();
  }

  iterator = 0;
}

function back() {
  if (iterator < generatedPlates.length - 1) {
    iterator++;
    // Redraws plate
    drawPlate();

    // Plate word with numbers
    rectMode(CENTER);
    fill(0);
    textFont(fontPlaca);
    textSize(100);
    text(generatedPlates[iterator], 417, 200, 500, 500);

    // Original word
    textFont('Helvetica');
    textSize(50);
    text(generatedWords[iterator], width / 2, 350, 500, 500);
  }
}

function forward() {
  if (iterator > 0) {
    iterator--;
    // Redraws plate
    drawPlate();

    // Plate word with numbers
    rectMode(CENTER);
    fill(0);
    textFont(fontPlaca);
    textSize(100);
    text(generatedPlates[iterator], 417, 200, 500, 500);

    // Original word
    textFont('Helvetica');
    textSize(50);
    text(generatedWords[iterator], width / 2, 350, 500, 500);
  }
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle / 2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}