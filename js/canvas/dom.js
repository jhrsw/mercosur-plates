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