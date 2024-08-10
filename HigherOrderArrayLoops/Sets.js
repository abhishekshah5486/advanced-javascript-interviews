const set = new Set();

// Unique values only.
// Adding values to a set in js
set.add(true);
set.add(-1);
set.add('Abhishek');
set.add('Abhishek');

console.log(set);

// Checking for existence of an element in a set
console.log(set.has(true));
console.log(set.has(-19));

// Deleting elements from a set
set.delete(-1);
console.log(set);

// Get the size of a set
console.log(set.size);
