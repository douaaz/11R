let insect1;
let insect2;
let insects = [];
let p = [];
function setup() {
  createCanvas(400, 400);
  insect1 = new InsectLeader(random() * width, random() * height);
  insect2 = new NormalInsect(random() * width, random() * height);
}

function draw() {
  background(255);
  insect1.update();
  insect1.display();
  insect2.update();
  insect2.display();
  if (random() < 0.04) {
    insects.push(new NormalInsect(random(width), random(height)));
  }
  for (let i = 0; i < insects.length; i++) {
    let b = insects[i];
    b.display();
    b.update();
  }
  noStroke();
  noFill();
  circle(insect1.x, insect1.y, 50);
  stroke(1);
  let distance = dist(insect1.x, insect1.y, mouseX, mouseY);
  if (insects.length < 50) {
    if (distance < 50) {
      fill(255, 255, 0, 30);
      circle(insect1.x, insect1.y, 50);
      if (mouseIsPressed) {
        fill(255, 255, 0);
        text("+1", 200, 200);
        p = p + 1;
      }
    } else {
      noStroke();
      noFill();
      circle(insect1.x, insect1.y, 50);
      stroke(1);
    }
  }
  if (insects.length > 50) {
    textSize(40);
    fill(255, 0, 0);
    text("GAME OVER", 100, 300);
  }
  if (insects.length < 50) {
    textSize(13);
    fill(255, 0, 0);
    text("TIME COUNT =", 10, 20);
    text(insects.length, 110, 20);
    textSize(13);
    fill(255, 0, 0);
    text("SCORE =", 300, 20);
    text(p.length, 360, 20);
    text("Click on the red bug to increase your score", 10, 40);
  } else {
    textSize(13);
    fill(255, 0, 0);
    text("TIME COUNT =  50", 10, 20);
    textSize(13);
    fill(255, 0, 0);
    text("SCORE =", 300, 20);
    text(p.length, 360, 20);
    text("Click on the red bug to increase your score", 10, 40);
  }
}

class InsectLeader {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  }
  update() {
    if (insects.length < 50) {
      this.fly();
    } else {
      this.freeze();
      this.laugh();
    }
  }
  display() {
    strokeWeight(1);
    fill(180, 0, 0);
    ellipse(this.x, this.y, 13);
    fill(220);
    triangle(
      this.x - 5,
      this.y - 5,
      this.x - 3,
      this.y - 15,
      this.x - 10,
      this.y - 20
    );
    triangle(
      this.x - 5,
      this.y - 5,
      this.x + 10,
      this.y - 20,
      this.x + 20,
      this.y - 17
    );
    fill(255, 250, 240);
    circle(this.x - 20, this.y - 5, 15);
    circle(this.x - 11, this.y, 15);
    fill(0);
    circle(this.x - 21, this.y - 5, 4);
    circle(this.x - 11, this.y - 1, 4);
    fill(255);
    circle(this.x - 21, this.y - 5, 2);
    circle(this.x - 11, this.y - 1, 2);
    strokeWeight(3);
    stroke(0);
    line(this.x - 18, this.y + 3, this.x - 22, this.y + 7);
    strokeWeight(1);
    line(this.x - 4, this.y + 6, this.x - 6, this.y + 10);
    line(this.x, this.y + 6, this.x + 2, this.y + 10);
  }
  fly() {
    this.x = this.x + random(-3, 5);
    this.y = this.y + random(-3, 7);
    if (400 < this.x) {
      this.x = this.x * 0.1;
    }
    if (400 < this.y) {
      this.y = this.y * 0.1;
    }
  }
  freeze() {
    this.x = 200;
    this.y = 200;
  }
  laugh() {
    fill(255);
    circle(130, 190, 60);
    textSize(9);
    fill(0);
    stroke(0);
    text("AHAHA!", 112, 180);
    text("(evil laugh)", 110, 195);
    fill(255);
    triangle(160, 198, 161, 188, 170, 195);
  }
}
class NormalInsect {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  }
  update() {
    if (insects.length < 50) {
      this.move();
    } else {
      this.fall();
    }
  }
  display() {
    strokeWeight(1);
    fill(220);
    ellipse(this.x - 3, this.y - 15, 10, 10);
    ellipse(this.x + 5, this.y - 15, 10, 20);
    fill(100);
    circle(this.x + 10, this.y, 15);
    circle(this.x, this.y, 20);
    fill(255);
    circle(this.x - 7, this.y - 3, 10);
    circle(this.x + 3, this.y - 3, 10);
    fill(0);
    circle(this.x - 7, this.y - 3, 1);
    circle(this.x + 3, this.y - 3, 1);
    strokeWeight(2);
    line(this.x - 4, this.y + 9, this.x - 4, this.y + 12);
    line(this.x + 2, this.y + 9, this.x + 2, this.y + 12);
    line(this.x + 8, this.y + 7, this.x + 8, this.y + 10);
    line(this.x + 12, this.y + 7, this.x + 12, this.y + 10);
    line(this.x - 3, this.y - 10, this.x - 5, this.y - 14);
    line(this.x, this.y - 10, this.x + 2, this.y - 14);
  }
  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }
  fall() {
    this.y = this.y + 5;
  }
}
