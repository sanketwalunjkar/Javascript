// Lexical scopeing
(function () {
  var name = 'Sanket';
  function displayName() {
    console.log(name);
  }
  displayName();
})();

// closure example 1
function myFun() {
  var name = 'John';
  function visibleName() {
    console.log(name);
  }
  return visibleName;
}

myFun()();

// closure example 2
function makeAdder(x) {
  return function (y) {
    return x + y;
  }
}

const callAdder = makeAdder(5)(2);
const callAdder2 = makeAdder(12)(3);
console.log(callAdder, callAdder2);

// closure in loop
function showHelp(help) {
  document.getElementById('help').innerText = help;
}

function helpCallBack(help) {
  return function () {
    showHelp(help);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var helptext = [
    { 'id': 'email', 'help': 'Your e-mail address' },
    { 'id': 'name', 'help': 'Your full name' },
    { 'id': 'age', 'help': 'Your age (you must be over 16)' }
  ];

  helptext.forEach(function (item) {
    document.getElementById(item.id).addEventListener('focus', function () {
      helpCallBack(item.help)();
    });
  });
});
