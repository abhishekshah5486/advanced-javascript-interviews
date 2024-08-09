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
console.log("A ", arr);
const myArr1 = arr.slice(1,  3);
console.log(myArr1);
console.log("B ", arr);
const myArr2 = arr.splice(1, 2, -3, -4);
console.log(myArr2);
console.log(arr);
