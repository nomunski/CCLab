//cell division function was learned from The Coding Train's Mitosis Simulation: https://www.youtube.com/watch?v=jxGS3fKPKJA

var cell;
var cells = [];

function setup() {
  createCanvas(400, 400);

  // create 2 initial cells and add them to the 'cells' array
  cells.push(new Cell());
  cells.push(new Cell());

  ellipse(200, 200, 400, 400);
}

function draw() {
  // background(0, 30);

  fill(0, 40);
  rect(0, 0, 400, 400);
  stroke(10);
  fill(245, 245, 220, 60);

  ellipse(200, 200, 400, 400);

  //calling my functions
  for (var i = 0; i < cells.length; i++) {
    cells[i].move(); //move function
    cells[i].show(); //display function
    cells[i].glow(); //ring around the cells
    cells[i].restrain(); //making sure the cells are restrained in the petri dish
  }
}

function Cell(pos, r, c) {
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(random(width), random(height)); //each initial cells at a random x,y position
  }

  this.r = r || 100; //radius
  this.c = c || color(random(10, 255), random(100, 255), random(100, 255), 150); //random cell color

  // check if it's clicked; if the position of mouseX and mouseY is less than cell radius, the if statement is met
  this.clicked = function (x, y) {
    var d = dist(this.pos.x, this.pos.y, x, y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  };

  // restrain inside the petri dish

  this.restrain = function () {
    var d = dist(this.pos.x, this.pos.y, 200, 200);
    if (d > 200 - this.r) {
      this.pos.x = 200;
      this.pos.y = 200;
    }
  };

  // multiply function (mitosis)
  this.mitosis = function () {
    this.pos.x += random(-this.r, this.r);

    var cell = new Cell(this.pos, this.r * 0.8, this.c);
    return cell;
  };

  // move function; vel = velocity
  this.move = function () {
    var vel = p5.Vector.random2D(); //random 2D vector for movement
    vel.mult(2); //faster speed
    this.pos.add(vel);

    // bounce off edges
    if (this.pos.x < this.r || this.pos.x > width - this.r) {
      vel.x *= -5;
    }
    if (this.pos.y < this.r || this.pos.y > height - this.r) {
      vel.y *= -5;
    }
  };

  // show function
  this.show = function () {
    noStroke();
    fill(this.c);

    ellipse(this.pos.x, this.pos.y, this.r, this.r);

    // ring around the cells
    this.glow = function () {
      noFill();
      stroke(255, 255, 204, 40);
      strokeWeight(3);
      ellipse(this.pos.x, this.pos.y, this.r + 5, this.r + 5);
    };
  };
}

// click mouse for mitosis
function mousePressed() {
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].clicked(mouseX, mouseY)) {
      //create new cells and remove the original cell
      cells.push(cells[i].mitosis());
      cells.push(cells[i].mitosis());
      cells.splice(i, 1);
    }
  }
}

// spacebar for reset
function keyPressed() {
  if (key === " ") {
    cells = [];
    cells.push(new Cell());
    cells.push(new Cell());
  }
}
