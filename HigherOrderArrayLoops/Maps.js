// Maps in javascript
const map = new Map();
// Adding entries to map
map.set('name', 'Abhishek');
map.set(true, false);
console.log(map);

// Accessing values from a map
console.log(map.get('name'));
console.log(map.get(true));

// Checking for an existence of a key
console.log(map.has('false'));
console.log(map.has('name'));

// Removing/ deleting entries from a map
map.delete(true);
console.log(map);

// Converting a map into an array of key-value pairs
const arr = Array.from(map);
console.log(arr);