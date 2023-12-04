let myTxt = 'hello';
let patterns = [];
const maxGenerations = 500;

function setup() {
  let cvs = createCanvas(1200, 600);
  cvs.parent("p5-canvas");

  let params = getURLParams();
  myTxt = params.answer;
}

function draw() {
  background(255);

  if (patterns.length < maxGenerations) {
    patterns.push(new Pattern());
  }

  for (let i = 0; i < patterns.length; i++) {
    patterns[i].update();
    patterns[i].display();
  }
}

class Pattern {
  constructor() {
    this.xPos = random(width);
    this.yPos = random(height);
    this.textSize = random(1, 10);
    this.rotation = radians(random(0, 180));
  }

  update() {
    // Add update logic if needed
  }

  display() {
    push();
    translate(this.xPos, this.yPos);
    rotate(this.rotation);
    textSize(this.textSize);
    textFont('Courier New');
    text(myTxt.replace(/%20/g, " "), 0, 0);
    pop();
  }
}
