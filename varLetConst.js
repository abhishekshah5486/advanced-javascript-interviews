console.log(a);

var a = 10;
console.log(a);
a = 20; // re-assignment
console.log(a);

var a = 30;
console.log(a); // re-declaration

// console.log(b); // Cannot access a variable defined with let before initialization
let b = 10;
console.log(b);
b = 20; // re-assignment

// let b = 30; // re-initialization not allowed

// console.log(c); // Cannot access a variable defined with const before initialization
const c = 30;
// c = 40; // re-assignment not allowed;
console.log(c);
// const c = 50;  re-declaration not allowed
