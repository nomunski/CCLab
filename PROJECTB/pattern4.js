let myTxt = 'hello';
let patterns = [];
let generateInterval;
let generatedCount = 0;
const maxGenerations = 200;

function setup() {
  let cvs = createCanvas(1200, 600);
  cvs.parent("p5-canvas4");

  let params = getURLParams();
  myTxt = params.answer;
  myTxt.replace("%20", " ");

  startGeneration();
}

function draw() {
  background(15, 10);

  // Display patterns
  for (let i = 0; i < patterns.length; i++) {
    patterns[i].update();
    patterns[i].display();
  }
}

function startGeneration() {
  clearInterval(generateInterval);
  patterns = [];
  generatedCount = 0;
  generatePattern();

  generateInterval = setInterval(generatePattern, 20);
}

function generatePattern() {
  if (generatedCount < maxGenerations) {
    patterns.push(new Pattern());
    generatedCount++;
  } else {
    clearInterval(generateInterval);
  }
}

class Pattern {
  constructor() {
    this.text = myTxt.replace(/%20/g, " ");
    this.xPos = random(width);
    this.yPos = random(height);
    this.textSize = random(10, 26);
    this.textColor = color(255);
    this.rotation = random(TWO_PI);
  }

  update() {
    // Move text up
    this.yPos -= 2;

    if (this.yPos < -30) {
      this.yPos = height;
    }

    if (mouseIsPressed) {
      this.yPos += 10;
    }
  }

  display() {
    push();
    translate(this.xPos, this.yPos);
    rotate(this.rotation);
    textSize(this.textSize);
    textFont('Courier New');
    fill(this.textColor);
    text(this.text, 0, 0);
    pop();
  }
}
