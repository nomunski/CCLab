var myTxt = 'hello';
let patterns = [];
let generateInterval;
let generatedCount = 0;
const maxGenerations = 700;
let alpha = 255;


function setup() {

  let cvs = createCanvas(600, 600);
  cvs.parent("p5-canvas3");

  let params = getURLParams();
  myTxt = params.answer;

  startGeneration();
}

function draw() {
  background(255, 25);

  // Display patterns
  for (let i = 0; i < patterns.length ; i++) {
    patterns[i].update();
    patterns[i].display();
    if(patterns[i].a <=0 ){
      patterns.splice(i, 1);
    }
  }  
}

function startGeneration(){
  clearInterval(generateInterval);
  patterns = [];
  generatedCount = 0;
  generatePattern();
  
  generateInterval = setInterval (generatePattern, 20);
  
}
function generatePattern() {

  patterns.push(new Text());
  generatedCount++;
  
}


class Text{
  constructor(){
    this.a = alpha
    this.textSize = random(1, 35)
    this.rotation = random(TWO_PI);
  }

  display(){
    
  push();
  translate(300,300);
  rotate(this.rotation);
  textSize(this.textSize);
  textFont('Courier New')
  
  fill(15, this.a);
  text(myTxt.replace(/%20/g, " "), mouseX -300, mouseY) -300;
  pop();
    
  }
  update(){
    this.a -= 5
  }
}

