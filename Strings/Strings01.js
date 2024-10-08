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

// Replace() Method --> Replaces a specified value or pattern in a string with a new value.
console.log(str.replace('apple.', 'carrot'));
// Expected output: carrotbanana.orange.oats.grapes

// replaceAll() --> Replaces all occurences of a substring with another/specified new value.
const text = "foo bar foo bar";
console.log(text.replaceAll('foo', 'abhishek'));
// Expected output: abhishek bar abhishek bar


// padStart() --> Pads the start of a string with another string until the length of the string reaches the desired the length.
const temp = new String('12');
console.log(temp.padStart(3, -1));

// padEnd() --> Pads the end of a string with another string until the length of the string reaches the desired the length.
console.log(temp.padEnd(4, -1));


// substr() --> Extracts a substring of a string starting at a index and continuing for a given number of characters.
const word = new String('JavaScript');
console.log(word.substr(1, 3));

// substring() --> (startIndex, endIndex) endIndex is exclusive
// It converts negative index to 0.
// If the start index is greater than the end index, the substring() method will swap the start and end indices.
console.log(word.substring(-1, 3)) // Index 0 to 3;
console.log(word.substring(-1, -2)) // Index 0 to 0
console.log(word.substring(3, -3)) // Index 3 to 0

// slice() --> (startIndex, endIndex) EndIndex is exclusive
// Slice can handle negative indices
// If the start index is greater than the end index, the substring() method will not swap the start and end indices.
console.log(word.length);
console.log(word.slice(4)); // Index 4 to the end of the string
console.log(word.slice(4, 6)) // Index 4 to 6-1
console.log(word.slice(-1)) // Index word.length+(-1) to the end of string
console.log(word.slice(-3, -1)) // Index 7 to index 8
console.log(word.slice(2, 0))