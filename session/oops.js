// object literal
const circle = {
  radius: 2,
  draw: function() {
    console.log('draw');
  }
}
// o/p
circle.radius // 2 (.notaation)

// factory function
function circle(radius) {
  return {
    radius: radius,
    draw: function() {
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
  this.draw = function() {
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
  this.loction = {x: 0};
  this.draw = function() {
    console.log('call draw function');
  }
  return this;
}   
const circle5 = Circle.call({x: 3}, 5);
Circle.call({x: 3}, 5);
// o/p
//x: 3, 
//radius: 5 
//loction: {…}
// draw: ƒ

circle5.draw(); // call draw function
circle5.loction // {x: 0}
Circle.call({location:{x: 3}}, 5);
// draw: ƒ ()
// radius: 5
// location: {x: 3}
// loction: {x: 0}

const circle6 = Circle.bind({x: 3}, 5);
circle6();
// o/p
//{x: 3, radius: 5, loction: {…}, draw: ƒ}

setInterval(() => console.log('hi'), 1000);








