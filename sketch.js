var colour;
var logo;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  var cvs = createCanvas(windowWidth, windowHeight);
  cvs.position(0, 0);
  // cvs.parent('#cvs');
  cvs.style('z-index', '-1');
  colour = color(100, 1);
  // logo = loadImage("image/logo.png");
  // logo = createImg('data/logo.png');
  // logo.size(70, 70);
  // logo.parent('#logo');

  // for (var i = 0; i < 5; i++) {
  //   var a = createA('http://p5js.org/', 'name of piece');
  //   a.style('color', '#ddd');

  var menu = [];
  menu = selectAll('.menu');
  for (var i = 0; i < menu.length; i++) {
    menu[i].style('background-color', 'col');
  }
  // p.style('padding', '24px');
  //   a.parent(p);
  // }
}

function draw() {
  stroke(colour);
  line(mouseX, 0, mouseX, height);
  line(0, mouseY, width, mouseY);
}

function mousePressed() {
  colour = color(255, 0, 0, 2);
}

function mouseReleased() {
  colour = color(100, 1);
}