function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  textSize(64);
  translate(300,300);
  rotate((PI * 0.25) * sin(0.1 * frameCount));
  scale(cos(0.01 * frameCount));
  text("💩", 0, 0);
  resetMatrix();
}
