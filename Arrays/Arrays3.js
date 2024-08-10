// isArray method
// checks if the input is an array or not
const arr = [3, 5, -2, 'Abhishek', true];
console.log(Array.isArray(arr));
console.log(Array.isArray(false));
// from method 
// Converts a string into an array
console.log(Array.from('Abhishek'));
// Interviews IMP
console.log(Array.from({name: 'Abhishek'}));
// Not able to convert an object into an array
let a = 10;
let b = 20;
let c = 30;
console.log(Array.of(a, b, c));
// Returns a new array from a set of elements.