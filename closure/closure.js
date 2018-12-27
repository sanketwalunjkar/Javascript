const log = console.log;
// Lexical Scoping
(function () {
  const name = 'Sanket';
  function displayName() {
    log(name);
  }
  displayName();
})();

// closure example 1
const myFun = name => log(name);
myFun('John');

// closure example 2
const makeAdder = x => y => x + y;

log(makeAdder(5)(2), makeAdder(12)(3));

// closure in loop
const showHelp = help => document.getElementById('help').innerText = help;

const helpCallBack = help => showHelp(help);

document.addEventListener('DOMContentLoaded', () => {
  const helptext = [
    { 'id': 'email', 'help': 'Your e-mail address' },
    { 'id': 'name', 'help': 'Your full name' },
    { 'id': 'age', 'help': 'Your age (you must be over 16)' }
  ];

  helptext.forEach(item => document.getElementById(item.id).addEventListener('focus', () => helpCallBack(item.help)));
});
