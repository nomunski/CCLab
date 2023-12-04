let inpt;
let btn;

function setup() {
  createCanvas(400, 400);
  btn = select('#generateButton');
  btn.mousePressed(getText);
  
}

function draw() {
}

function getText() {
  inpt = select('#textInput');
  let b = inpt.value();
  let i = floor(random(1,6));
  // i++; 
  console.log(b);
  let newLocation = 'pattern'+ i +'.html?answer='+ b;

  window.location.href = newLocation;
}

