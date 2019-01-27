const log = console.log,
      name = `sanket`;
var a = 5;
let b = 10;
//log(`using var answer ` = a); // Invalid left-hand side in assignment
// when your string and variable print in console, string and variable between use operator 
log(`using const answer ` + name); // sanket
log(`using var answer ` + a); // 5 (using var)
log('using let answer ', b); // 5 (using let) 

if (true) {
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



(function (){
  var vNum = 2;
  let lNum = 4;
    if(true){
      var bvNum = 15;
      let blNum =  10;
      log(vNum, lNum); // 2 4
      log(vNum += 5, lNum+=1); // 7 5
      log(bvNum, blNum); // 15 10
      log(bvNum += 1, blNum += 2); // 16 12
    }
  log(vNum, lNum); // 7 5
  log(bvNum); // 16
})();

// global scope
// var numVar = 10;
// let numLet = 25;
// (function() {
//   // function scope start
//   var varFunctionNum = 20;
//   let letFunctionNum = 40;
//   if(true){
//     // block scope start
//     var blockVarNum = 15;
//     let blockLetNum = 30;
//     log(numVar, numLet); // 10 25
//     log(varFunctionNum + 2, letFunctionNum + 3); // 22 43
//     log(blockVarNum + 3, blockLetNum + 2); // 18 32
//     // block scope end
//   }
//   log(numVar, numLet); // 10 25
//   log(varFunctionNum, letFunctionNum); // 22 40 
//   log(blockVarNum, blockLetNum); // 18 not defind
//   // function scope end
// })();
// log(numVar, numLet); // 10 25
// log(varFunctionNum, letFunctionNum); // not defind
// log(blockVarNum, blockLetNum); // not defind