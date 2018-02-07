var w = 800;

function setup() {
  createCanvas(w, w);
  background(200);
}

function draw() {
  drawParabola(1, 200);
}

// go from x=0 to x=800, or from -4 to 4.
// y goes from 0 to 800, or from -0.5 to 7.5
function drawParabola(a, s) {
  translate(w/2, w/16);
  // rect(0, 100, 50, 50);
  // fill('blue');

  for (var i=0; i < s; i++) {
    var inc = w / s;
    var xPos = -4 + i * inc/100;
    var xNext = - 4 + (i + 1) * inc/100;
    var yPos = xPos * xPos;
    var yNext = xNext * xNext;
    line(xPos * 100, yPos * 100, xNext * 100, yNext * 100);
  }

  translate(-w/2, -w/16);
}
