let inpt;
let btn;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  btn = select('#btn');
  btn.mouseClicked(getText);
}

function getText(){
  inpt = select('#lname');
  let b = inpt.value();
  let i = floor(random(1,3));
  // console.log(b);
//   let newLocation = 'index2.html?answer='+b;
  let newLocation = 'index'+ i +'.html?answer='+ b;

  window.location.href = newLocation;

  
}