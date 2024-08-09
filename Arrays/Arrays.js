let arr = [1, 5, 'Abhishek', false];
// Array Methods
// push() push an element at the end of the array
arr.push(10);
console.log(arr);

// pop() Remove an element from the end of the array
arr.pop();
console.log(arr);

// Append an element at the start of the array
// unshift();
arr.unshift('Divyanshu');
console.log(arr);

// Remove an element from the start of the array
// shift();
arr.shift();
console.log(arr);

console.log(arr.includes('Abhishek'));
console.log(arr.indexOf(5));

// Slice Splice Methods
arr = [1, 5, 'Abhishek', false];
console.log("A ", arr);
const myArr1 = arr.slice(1,  3);
console.log(myArr1);
console.log("B ", arr);
const myArr2 = arr.splice(1, 2);
console.log(myArr2);
console.log(arr);

// Difference between slice and splice.
// The last/end index in slice is exclusive while the end index in splice is inclusive
// Slice creates a shallow copy of a portion of an array into a new array and returns a new array containing the removed elements.
// Slice does not modify the original array
// Splice returns an array containing the removed elements, if any.
// Splice modifies the original array by removing elements.

let arr2 = [5, 6, -1, 'Abhishek', true];
// const spliceArr2 = arr2.splice(1, 3); // Removes element for the index [1, 3] both inclusive.
// console.log(spliceArr2);
// console.log(arr2);
const spliceArr3 = arr2.splice(1, 0, 3, 4) // Insert 3 and 4 at the index 1;
// Returns an empty array
console.log(arr2);
// Expected output : [5, 3, 4, 6, -1, 'Abhishek', true];
const spliceArr4 = arr2.splice(1, 2, -1, -2) // Replace the index 1 and 2 with -1 and -2 respectively.
console.log(arr2);


