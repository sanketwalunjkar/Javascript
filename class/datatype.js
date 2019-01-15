let n = 19.33, // floating
    a = (1 / 0);
console.log(a); // Infinity

let num = ('test' / 2),
    num2 = (3 + 2 / 'demo');
console.log(num, num2); // NaN

let string1 = 'walunjkar';
console.log(`sanket ${string1}`); // sanket walunjkar
console.log(string1); // walunjkar
console.log(`sanket ${string1 = `walunj`} is age ${ 2018 - 1996 }`); // sanket walunjkar is age 22
console.log(string1); // walunj

let string2 = `My name is "sanket's"`;
console.log(string2);

let longString = `What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
sanket ${string1} is age ${ 2018 - 1996 }`;
console.log(longString);

let numGreater =  90 > 88;
console.log(numGreater); // true

let numLessthan = 100 < 10;
console.log(numLessthan) // false

if (numGreater) {
    console.log(`90 is greaterthan 88`);
} else {
    console.log(`100 is lessthan 10`);
}

let loginId = null;
console.log(loginId);