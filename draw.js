
var w = 800;

function setup() {
  var can = createCanvas(w, w);
  background(200);
  var engine = Engine.create();
  var world = engine.world;
  // World.add(world, [player, ball]);
  Engine.run(engine);
  // Body.applyForce(ball, {x: ourball.x, y: ourball.y}, {x:0.03, y: 0.01});

  var mouse = Mouse.create(can.elt);
  mouse.pixelRatio = pixelDensity();
  var m = MouseConstraint.create(engine, { mouse: mouse });
  World.add(world, m);
}

function draw() {
  drawParabola(1/3, 200);
}

function mouseClicked() {
  console.log('clickin', mouseX, mouseY);
}

// var ball = Bodies.circle(ourball.x, ourball.y, ourball.r, { frictionAir: 0, friction: 0, restitution: 1 });

var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;
var MouseConstraint = Matter.MouseConstraint;
var Mouse = Matter.Mouse;

// go from x=0 to x=800, or from -4 to 4.
// y goes from 0 to 800, or from -0.5 to 7.5
function drawParabola(a, s) {
  translate(w/2, w/16);

  for (var i=0; i < s; i++) {
    var inc = w / s;
    var xPos = -4 + i * inc/100;
    var xNext = - 4 + (i + 1) * inc/100;
    var yPos = a * xPos * xPos;
    var yNext = a * xNext * xNext;
    line(xPos * 100, yPos * 100, xNext * 100, yNext * 100);
  }

  // draw focus:
  var p = 1 / (4 * a);
  ellipse(0, p * 100, 7, 7);

  translate(-w/2, -w/16);
}
