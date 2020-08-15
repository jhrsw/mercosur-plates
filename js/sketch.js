let BRFont;
let plateFont;

let plates;

let bgcolor;

let seenPlates = [];

const SEEN_CACHE = 10;

let iterator = 0;

let QRCode;

let randomizeButton;
let backButton;
let forwardButton;

function preload() {
  BRFont = loadFont('fonts/NotoSansKR-Black.otf');
  plateFont = loadFont('fonts/Oswald-SemiBold.ttf');

  plates = loadJSON('data/plates/pt-BR.json');

  QRCode = loadImage('img/qr.gif');
}

function setup() {
  bgcolor = color('#F7F9F9');

  createCanvas(800, 400);
  background(bgcolor);

  createRandomizeButton();
  createNavButtons();

  // Needed to write first word on launch
  randomizeAndShow();
}

function draw() {
  if (iterator === 0) {
    forwardButton.attribute('disabled', 'true');
  } else {
    forwardButton.removeAttribute('disabled');
  }

  if (iterator === seenPlates.length - 1) {
    backButton.attribute('disabled', 'true');
  } else {
    backButton.removeAttribute('disabled');
  }
}

function createRandomizeButton() {
  randomizeButton = createButton('Aleatorizar!');
  randomizeButton.class('randomize');
  randomizeButton.mousePressed(randomizeAndShow);
}

function createNavButtons() {
  backButton = createButton('Voltar');
  backButton.class('navigation');
  backButton.mousePressed(backAndShow);

  forwardButton = createButton('Avançar');
  forwardButton.class('navigation');
  forwardButton.mousePressed(forwardAndShow);
}

function randomizeAndShow() {
  let randomNumber = Math.trunc(random(0, Object.keys(plates).length));
  let plate = Object.keys(plates)[randomNumber];
  let original = plates[plate];

  drawPlate();
  writeWord(plate, original);

  if(seenPlates.unshift({[plate]: original}) > SEEN_CACHE) {
    seenPlates.pop();
  }

  iterator = 0;
}

function writeWord(plate, original) {
  rectMode(CENTER);
  fill(0);
  textFont(plateFont);
  textSize(100);
  text(plate, 417, 200, 500, 500);

  textFont('Helvetica');
  textSize(50);
  text(original, 400, 350, 500, 500);
}

function backAndShow() {
  if (iterator < seenPlates.length - 1) {
    iterator++;

    const plate = Object.keys(seenPlates[iterator])[0];
    const original = Object.values(seenPlates[iterator])[0];

    drawPlate();
    writeWord(plate, original);
  }
}

function forwardAndShow() {
  if (iterator > 0) {
    iterator--;
    
    const plate = Object.keys(seenPlates[iterator])[0];
    const original = Object.values(seenPlates[iterator])[0];
    
    drawPlate();
    writeWord(plate, original);
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