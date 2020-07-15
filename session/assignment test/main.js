// 1. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
// Sample array:
// array1 = [1, 0, 2, 3, 4];
// array2 = [3, 5, 6, 7, 8, 13];
// Expected Output:
// [4, 5, 8, 10, 12, 13]

const array1 = [1, 0, 2, 3, 4],
 array2 = [3, 5, 6, 7, 8, 13];
let newArray = [];

for (let i = 0; i < array2.length; i++){
  let num = array1[i] == undefined ? 0 : array1[i];
  newArray.push(num + array2[i]);
}
document.getElementById('sumofArray').innerHTML = newArray;
console.log(newArray);


// 2. Write a JavaScript program to get the width and height of the window(any time the window is resized).
const windowSize = () => {
  const inWidth = window.innerWidth,
    outWidth = window.outerWidth,
    inHeight = window.innerHeight,
    outHeight = window.outerHeight;
  document.getElementById('windowInfo').innerHTML = `Window inner width is ${inWidth} </br>
    Window inner height is ${inHeight} </br>
    Window outer width is ${outWidth} </br>
    Window outer height is ${outHeight} </br>`;
}
windowSize();
window.addEventListener('resize', windowSize);

// 3. Write a JavaScript program to display the reading status(i.e.display book name, author name and reading status) of the following books.

const library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
  }];
const dataBody = document.getElementById('printData');
for (item of library) {
  dataBody.innerHTML += `<tr><td>${item.title}</td><td>${item.author}</td><td>${item.readingStatus}</td></tr>`;
};

// 4.Write a JavaScript function to split a string and convert it into an array of words.
// Test Data:
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh”]

const string_to_array = (name) => {
  console.log(name.split(" "));
}

// 5. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
//   Note : A prime number(or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.


// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".For numbers which are multiples of both three and five print "FizzBuzz"


// 7.  Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223

let x = 32243,
  n = String(x).split('');
let revStr = n.reverse().toString(),
 finalStr = revStr.replace(/,/g, "");
console.log(Number(finalStr));

// 8. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'
