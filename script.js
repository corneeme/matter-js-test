
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  
  Common = Matter.Common,
  Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();




// create a renderer
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    background: '#f5f5f5',
    showAngleIndicator: false,
    showAxes: false,
    showCollisions: false,
    showVelocity: false,
    
  }
});
if (render.options.wireframes == true) {
  render.options.background = '#303030'
  render.options.showAngleIndicator = true
} else {
  render.options.background = '#f5f5f5'
  if (y==1){
  render.options.showAngleIndicator = false
  } else {
    render.options.showAngleIndicator = false
  }
}


render.canvas.width = window.innerWidth
render.canvas.height = window.innerHeight
engine.gravity.x = 0
engine.gravity.y = 1
//engine.enableSleeping = true

var ground1 = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 50, {
  isStatic: true, render: {
    fillStyle: '#5c5c5c'
  }
});
var ground2 = Bodies.rectangle(window.innerWidth, window.innerHeight/2, 50, window.innerHeight, {
  isStatic: true, render: {
    fillStyle: '#5c5c5c'
  }
});
var ground3 = Bodies.rectangle(window.innerWidth/200, window.innerHeight/2, 50, window.innerHeight, {
  isStatic: true, render: {
    fillStyle: '#5c5c5c'
  }
});
var ground4 = Bodies.rectangle(window.innerWidth / 2, window.innerHeight/200, window.innerWidth, 50, {
  isStatic: true, render: {
    fillStyle: '#5c5c5c'
  }
});
var boxSize = window.innerHeight / 90
let mouseX = 0
let mouseY = 0
window.addEventListener("mousemove", (e) => {
  mouseX = e.offsetX
  mouseY = e.offsetY
});
function makeCirc() {

  var circle = Bodies.circle(mouseX, mouseY, boxSize / 2, {
    friction: 0.001, restitution: 0.2, render: {
      fillStyle: 'gray',
      strokeStyle: 'black',
      lineWidth: 1
    }
  });
  Composite.add(engine.world, [circle]);
}

function makeBox() {

  var square = Bodies.rectangle(mouseX, mouseY, boxSize, boxSize, {
    friction: 1, restitution: 0.2, render: {
      fillStyle: 'gray',
      strokeStyle: 'black',
      lineWidth: 1
    }
  });
  Composite.add(engine.world, [square]);
}
var detect='makeBox'
var y = 0
var x = 0
var a = 0
var b = 0
var c = 0
var boxes = 0
function keypress(keybind) {
  if (keybind == 'a'){
    keypress = 65
  }
  if (keybind == 'b'){
    keypress = 66
  }
  if (keybind == 'c'){
    keypress = 67
  }
  if (keybind == 'd'){
    keypress = 68
  }
  if (keybind == 'e'){
    keypress = 69
  }
  if (keybind == 'f'){
    keypress = 70
  }
  if (keybind == 'g'){
    keypress = 71
  }
  if (keybind == 'h'){
    keypress = 72
  }
  if (keybind == 'i'){
    keypress = 73
  }
  if (keybind == 'j'){
    keypress = 74
  }
  if (keybind == 'k'){
    keypress = 75
  }
  if (keybind == 'l'){
    keypress = 76
  }
  if (keybind == 'm'){
    keypress = 77
  }
  if (keybind == 'n'){
    keypress = 78
  }if (keybind == 'o'){
    keypress = 79
  }
  if (keybind == 'p'){
    keypress = 80
  }
  if (keybind == 'q'){
    keypress = 81
  }
  if (keybind == 'r'){
    keypress = 82
  }
  if (keybind == 's'){
    keypress = 83
  }
  if (keybind == 't'){
    keypress = 84
  }
  if (keybind == 'u'){
    keypress = 85
  }
  if (keybind == 'v'){
    keypress = 86
  }
  if (keybind == 'w'){
    keypress = 87
  }
  if (keybind == 'x'){
    keypress = 88
  }
  if (keybind == 'y'){
    keypress = 89
  }
  if (keybind == 'z'){
    keypress = 90
  }
  if (keybind == '1'){
    keypress = 49
  }
  if (keybind == '2'){
    keypress = 50
  }
  if (keybind == '3'){
    keypress = 51
  }
  if (keybind == '4'){
    keypress = 52
  }
  if (keybind == '5'){
    keypress = 53
  }
  if (keybind == '6'){
    keypress = 54
  }
  if (keybind == '7'){
    keypress = 55
  }
  if (keybind == '8'){
    keypress = 56
  }
  if (keybind == '9'){
    keypress = 57
  }
  if (keybind == '0'){
    keypress = 48
  }
  
}
document.addEventListener("keypress", function(event) {
  
  if (event.keyCode == 57) {
    if (y == 0) {
      y = 1
      render.options.showAngleIndicator = false
    } else if (y <= 1) {
      y = 0
      
        render.options.showAngleIndicator = true
      
      }
    

  }
  if (event.keyCode == 48) {
    if (x == 0) {
      x = 1
      render.options.wireframes = true
    } else if (x <= 1) {
      x = 0
      render.options.wireframes = false
    }
    

  }
  if (event.keyCode == 56) {
    if (a == 0) {
      a = 1
      render.options.showAxes = true
    } else if (a <= 1) {
      a = 0
      render.options.showAxes = false
    }
  }
  if (event.keyCode == 55) {
    if (b == 0) {
      b = 1
      render.options.showCollisions = true
    } else if (b <= 1) {
      b = 0
      render.options.showCollisions = false
    }
  }
  if (event.keyCode == 54) {
    if (c == 0) {
      c = 1
      render.options.showVelocity = true
    } else if (c <= 1) {
      c = 0
      render.options.showVelocity = false
    }
  }
  
  
});



function refreshsize() {
  render.canvas.width = window.innerWidth
  render.canvas.height = window.innerHeight
  engine.gravity.x = 0
  engine.gravity.y = 1
 
}

setInterval(refreshsize, 1);
setInterval(makeBox,100)

Composite.add(engine.world, [ground1,ground2,ground3,ground4]);



Render.run(render);
// create runner
var runner = Runner.create();
// run the engine
Runner.run(runner, engine);
