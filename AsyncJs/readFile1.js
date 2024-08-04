const fs = require('fs');
const path = require('path');

// Reading a file synchronously
const filePath = path.join(__dirname, 'file1.txt');
let f1 = fs.readFileSync(filePath, 'utf8');
console.log(f1 + '');
console.log('1');