let userInput;
let patterns = [];
let generateInterval;
let generatedCount = 0;
const maxGenerations = 500;

function setup() {
  createCanvas(1200, 1200);
  userInput = createInput('Enter your text');
  userInput.parent('mytext');
  userInput.position(20, height + 10);

  let generateButton = createButton('Generate');
  generateButton.position(userInput.x + userInput.width + 10, height + 10);
  generateButton.mousePressed(startGeneration);
}

function draw() {
  background(255);

  // Display patterns
  for (let i = 0; i < patterns.length; i++) {
    displayPattern(patterns[i]);
  }
}

function startGeneration() {
  clearInterval(generateInterval);
  patterns = [];
  generatedCount = 0;
  generatePattern();

  generateInterval = setInterval(generatePattern, 10);
}

function generatePattern() {
  if (generatedCount < maxGenerations) {
    let pattern = {
      text: userInput.value(),
      xPos: random(width),
      yPos: random(height),
      textSize: random(1, 10),
      rotation: radians(random(0, 180))
    };

    patterns.push(pattern);
    generatedCount++;
  } else {
    clearInterval(generateInterval);
  }
}

function displayPattern(pattern) {
  push();
  translate(pattern.xPos, pattern.yPos);
  rotate(pattern.rotation);
  textSize(pattern.textSize);
  textFont('Courier New')
  text(pattern.text, 0, 0);
  pop();
}

