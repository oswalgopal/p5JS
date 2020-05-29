function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  if (mouseIsPressed) {
    fill(255);
  } else {
    fill(0);
  }
  ellipse(mouseX, mouseY, 10, 10);
}
