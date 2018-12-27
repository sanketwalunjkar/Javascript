const log = console.log,
      name = `sanket`;
var a = 5;
let b = 10;
//log(`using var answer ` = a); // Invalid left-hand side in assignment
// when your string and variable print in console, string and variable between use operator 
log(`using const answer ` + name); // sanket
log(`using var answer ` + a); // 5 (using var)
log('using let answer ', b); // 5 (using let) 

if(true){
  const name = `test`;
  var a = 7;
  let b = 15;
  log(`accessing block cost & in block scope answer `, name); // test
  log(`accessing block var & in block scope answer `,  a); // 7 (using var) || block scope  
  log(`accessing block let & in block scope answer `,  b); // 15
}

//const name = `demo`; // here declare and assign to name so will be error  "Identifier 'name' has already been declared"
log(`accessing global cost & in global scope answer `, name); // sanket
log(`accessing global var & in global scope answer `, a); // 7 (using var) || global scope
log(`accessing global let & in global scope answer `, b); // 10