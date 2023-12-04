var myTxt = 'hello';
let numTexts = 15;
let spacing = 30;
let isMousePressed = false;

function setup() {
  frameRate(10);

  let cvs = createCanvas(1200, 600);
  cvs.parent("p5-canvas5");

  let params = getURLParams();
  myTxt = params.answer;
  myTxt = myTxt.replace(/%20/g, " ");
}

function draw() {
  if (isMousePressed) {
    background(255);
    fill(0);
  } else {
    background(0);
    fill(255);
  }
  // background(0);
  // fill(255);
  textFont("courier new")
  textSize(30);
  textAlign(CENTER, CENTER);

  // Calculate the middle, left, and right based on mouse position
  for (let i = 0; i < numTexts; i++) {
    let middle = myTxt.length / 2;
    let left = middle - ((mouseX / width) * middle);
    let right = middle + ((mouseX / width) * middle);

    // Calculate the vertical position based on the loop index and spacing
    let yPos = 100 + i * spacing;

    text(myTxt.substring(left, right + 1), width / 2, yPos);
  }


}

function mousePressed() {
  isMousePressed = !isMousePressed;
}

function captureCanvas() {
  saveCanvas('myconcretepoetry', 'png');
}