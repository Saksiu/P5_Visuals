function setup() {
  noLoop();
  createCanvas(800, 600);
  circlesize = 250;
}

function draw() { //noprotect
  for (y = 0; y < height; y++) {
    for (x = 0; x < width; x++) {
      set(x, y, color(
        0,
        0,
        0,
        255*(x/width)));
    }
  }

  updatePixels();
}
