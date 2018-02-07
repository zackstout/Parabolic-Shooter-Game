
var w = 800;
var focus;
var allBalls = [];

var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;
var MouseConstraint = Matter.MouseConstraint;
var Mouse = Matter.Mouse;

var world, engine;



function setup() {
  var can = createCanvas(w, w);
  background(200);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  world.gravity.y = 0;

  var mouse = Mouse.create(can.elt);
  mouse.pixelRatio = pixelDensity();
  var m = MouseConstraint.create(engine, { mouse: mouse });
  World.add(world, m);
}

function draw() {
  background(200);
  drawParabola(1/5, 200);
  for (var i=0; i < allBalls.length; i++) {
    // fill(getRandomColor());
    ellipse(allBalls[i].position.x, allBalls[i].position.y, 10, 10);
    if (allBalls[i].position.x > 500) {
      Body.setVelocity(allBalls[i], {x: 0, y: 10});
    }
  }
}

function mouseClicked() {
  // translate(w/2, w/16);
  console.log('clickin', mouseX, mouseY);
  // why on earth do we have to add 100 rather than 50 here?
  var newBall = Bodies.circle(w / 2, focus + 50, 10);
  allBalls.push(newBall);
  World.add(world, newBall);

  var xComp = (mouseX - w / 2)/100000;
  var yComp = (mouseY - (focus + 50))/100000;

  Body.applyForce(newBall, {x: w / 2, y: focus + 50}, {x: xComp, y: yComp});


  console.log(xComp, yComp);
  // translate(-w/2, -w/16);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


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
  focus = p * 100 + 50;
  // don't forget to add the 50:
  ellipse(0, focus, 7, 7);

  translate(-w/2, -w/16);
}
