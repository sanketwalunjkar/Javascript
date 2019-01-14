const log = console.log; 
log("" + 1 + 0); // 10  = here concat bcoz string and opretor '+'
log("" - 1 + 0); // -1 = substrction
log(true + false); // 1 = true = 1 & false = 0
log(6 / "3"); // 2 = substrction
log("2" * "3"); // 6 = multiply
log(4 + 5 + "px"); // "9px" = addition & concat
log("$" + 4 + 5); // "$45" concat
log("4" - 2); // 2  = substrction
log("4px" - 2); // NaN = string in char (Not a Number)
log(null + 1); // 1  = NaN = 0
log(undefined + 1); // NaN 

let str = '8149857158';
log(typeof(str)); // string
log(Number(str)); // 8149857158

let num = 2333;
log(typeof(num)); // number
log(String(num)); // '2333'

let str2 = '333a';
log(Number(str2));// NaN

let booleanVal = true;
log(typeof(booleanVal)); // boolean
log(Number(booleanVal)); // 1  true = 0
log(String(booleanVal)); // 'true'

let assing;
log(assing); // undefined
log(typeof(assing)); // undefined
assing = null;
log(typeof(assing)); // object

// comma
let xNum = (1 + 2, 4 + 2);
log(xnum); // 6
//let sNum = 3, 7; // Unexpected number

// postfix and prefix 
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1

// Assignment result 
let aNum = 2;
let bNum = 1 + (aNum *= 2); // 5
log(bNum);

//comparison
log(10 > 8); //true
log(10 < 8); //false
log("san" > 10); // false 
log("san" > '10'); // true
log('sanket' < 'saket'); //false
log('sanket' == 'sanket'); //true
log( 10 == 1 ); // false 
log( 10 >= 1 ); // true 
log( 10 <= 1 ); // false
log( "num" == 1 ); // false 
log( "num" >= 1 ); // false 
log( "num" <= 1 ); // false
log( undefined == null);// true
log( undefined == NaN);// false





