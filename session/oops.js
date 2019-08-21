// object literal
const circle = {
  radius: 2,
  draw: function () {
    console.log('draw');
  }
}
// o/p
circle.radius // 2 (.notaation)

// factory function
function circle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log('call draw function');
    }
  }
}
const circle1 = new circle(2);
const circle2 = new circle(5);
circle1; // {radius: 2, draw: ƒ}
circle2; // {radius: 5, draw: ƒ}

// constractor function 
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('call draw function');
  }
}
const circle3 = new Circle(3);
const circle4 = new Circle(4);
circle3; // {radius: 3, draw: ƒ}
circle4; // {radius: 4, draw: ƒ}

// constractor properties

// use calling methods way (call,bind,apply)
function Circle(radius) {
  this.radius = radius;
  this.loction = { x: 0 };
  this.draw = function () {
    console.log('call draw function');
  }
  return	this;
}
Circle.call( {}, 3);
circle5 = Circle.call({}, 3);
// o/p
// radius: 3
// loction: {x: 0}
// draw: ƒ ()

circle6 = Circle.bind({}, 3);
circle6;
// o/p
// radius: 3
// loction: {x: 0}
// draw: ƒ ()


