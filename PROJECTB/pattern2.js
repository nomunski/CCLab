let img;
var myTxt = 'hello';
let xSpacing = 10;
let ySpacing = 10;
let l;
let isMousePressed = false;

function preload() {
  img = loadImage('assets/heart.png');
}

function setup() {

    let cvs = createCanvas(1200, 600);
    cvs.parent("p5-canvas2");
  
    let params = getURLParams();
    myTxt = params.answer;
    

  textFont('courier new')
}

function startGeneration() {
  redraw(); 
}

function draw() {
 background(255);
   // clear();
 // image(img, 0, 0, width, height);
  img.loadPixels();
// loadPixels();
  const d = img.pixelDensity();
  l=textWidth(myTxt);
  console.log(l);
if(l > 50){
  xSpacing =10;
  } else
    {
      xSpacing = floor(l);
    }

    for (let x = 0; x < img.width; x += xSpacing) {
      for (let y = 0; y < img.height; y += ySpacing) {
        const i = 4 * d * (y * d * img.width + x);
        const [r, g, b] = [img.pixels[i], img.pixels[i + 1], img.pixels[i + 2]];
  
        if (isMousePressed) {
      
          if (r > 200 && b < 100 && g < 100) {
            fill(255);
            text(myTxt.replace(/%20/g, " "), x, y, 200);
          } else {
            fill(255,0, 0);
            text(myTxt.replace(/%20/g, " "), x, y, 200);
          }
        } else {
          if (r > 200 && b < 100 && g < 100) {
            fill(255, 0, 0); // Reverse colors for white pixels
            text(myTxt.replace(/%20/g, " "), x, y, 200);
          } else {
            fill(255); // Reverse colors for red text
            text(myTxt.replace(/%20/g, " "), x, y, 200);
          }
          
        }
      }
    }
  
  img.updatePixels();
  noLoop();
}

function mousePressed() {
  isMousePressed = !isMousePressed;
  redraw();
}
