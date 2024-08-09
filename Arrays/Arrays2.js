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
const branchedArray = [
    [1, 2, 3],
    [4, 5, [6, 7]],
    [8, [9, [10, 11]], 12],
    [13, 14, 15],
  ];
const flattenedArr = branchedArray.flat(Infinity);
// Infinity depth
console.log(flattenedArr);
  

