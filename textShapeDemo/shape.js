let img;
var myTxt = 'hello';

function preload(){
  img = loadImage('heart.jpg');
}
function setup() {
  createCanvas(img.width, img.height);
  console.log("lovelove");
    
  let params = getURLParams();
  myTxt = params.answer;
  img.loadPixels();
  for(let x = 0; x < width; x+=40){
    for(let y = 0; y < height; y+=40){
      
      let clr = img.get(x, y);

      let index = (x + y*width)*4;
      
      let r = img.pixels[index];
      let g = img.pixels[index+1];
      let b = img.pixels[index+2];
      let total = r+g+b;
      //total is 255+255+255 = 765 when white
      //we are checking when the pixel is not white, < 765 
       if(total <= 700){
        stroke(255,0,0);
        strokeWeight(3);
        text(myTxt,x,y);
        // point(x,y);
       } 
    }
  }
  img.updatePixels();
 
  // console.log(params);
  // console.log('preload completed');
}

function draw() {
  // background(220);

  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);
 
  // console.log(queryString);
  // const answer = urlParams.get('answer');
  // console.log(answer);

}