const name = 'Abhishek';
console.log(`Hello, my name is ${name}`);

// String Methods in js
// V. IMP for Interviews
const username = new String('abhishek13may');
console.log(username.length);
console.log(username.toLowerCase());
console.log(username.toUpperCase());
console.log(username.toLowerCase().includes('a'));
console.log(username.charAt('3'));
console.log(username.indexOf('m'));

// Checks if a string starts with a particular keyword
// Returns a boolean result
console.log(username.startsWith('b'));
console.log(username.endsWith('ay'));

// trim() Methods
// trimEnd() trimStart() trimRight() trimLeft();
// trimStart() or trimLeft()--> Removes any whitespace from the beginning of the string
// trimEnd() or trimRight()--> Removes any whitespace from the end of the string
// trim() --> Removes any whitespace from both the ends of the string
const password = new String(' abi@mac');
console.log(password.trim());
console.log(password);

// concat() Method
// Concat or combine two or more strings and return a new string
console.log(name.concat(password.trim()));

// Repeat() --> Repeats a string specified number of times and returns a new string
console.log(username.repeat(2));

// Split() Method --> Splits a string into an array of substrings based on a specified delimiter and returns a new array.
const str = "apple.banana.orange.oats.grapes";
const arr = str.split('.');
console.log(arr);



