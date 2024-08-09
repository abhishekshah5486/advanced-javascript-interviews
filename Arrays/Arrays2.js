const marvel_heros = ['thor', 'Ironman', 'Spiderman'];
const dc = ['superman', 'flash', 'batman'];
// marvel_heros.push(dc);
// console.log(marvel_heros);
// Merging 2 arrays using concat
// Concat combines 2 or more arrays and returns a new array without actually modifying the new array.
// Method 1;
const mergedArr = marvel_heros.concat(dc);
console.log(mergedArr);
// Method 2;
// By using the spread operator.
const mergedArr2 = [...marvel_heros, ...dc];
console.log(mergedArr2);

