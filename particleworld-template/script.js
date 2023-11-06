let hearts = [];

function setup() {
  let canvas = createCanvas(600,600);
  canvas.parent("canvasWrapper")
}

function draw() {
  background(250, 184, 191);
  if (mouseIsPressed) {
    let p = new HeartParticles(mouseX, mouseY);
    hearts.push(p);
  }

  for (let i = hearts.length - 1; i >= 0; i--) {
    let p = hearts[i];
    p.update();
    p.display();
    
  if (hearts.length >= 247){
    hearts.splice(0, hearts.length - 247);
  }
  }
  
  text('click for more love', 10,20)
}

class HeartParticles {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velX = random(-3,3);
    this.velY = random(-3,3);
    this.size = random(5, 40);
    this.color = color(random(100,255), 0, random(0,50));
  }

  update() {
    this.x += this.velX
    this.y += this.velY

    if (this.x < 0 || this.x > width){
      this.velX *= -1
      }
       
     }

  display(){
    fill(this.color);
    noStroke();

   beginShape();
  vertex(this.x, this.y);
  bezierVertex(this.x - this.size / 2, this.y - this.size / 2, this.x - this.size, this.y + this.size / 3, this.x, this.y + this.size);
  bezierVertex(this.x + this.size, this.y + this.size / 3, this.x + this.size / 2, this.y - this.size / 2, this.x, this.y);
  endShape(CLOSE);  
}
}