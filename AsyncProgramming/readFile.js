const fs = require('fs');
const path = require('path');

// readFileSync (Blocking main thread)
// readFile (asynchronous)

const file1Path = path.join(__dirname, 'file1.txt');
let f1 = fs.readFileSync(file1Path);
console.log(f1 + "");

let f2 = fs.readFileSync(path.join(__dirname, 'file2.txt'));
console.log(f2 + "");

let f3 = fs.readFileSync(path.join(__dirname, 'file3.txt'));
console.log(f3 + "");