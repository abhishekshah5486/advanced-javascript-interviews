const fs = require('fs');
const path = require('path');

// Reading a file asynchronously.
const filePath = path.join(__dirname, 'file1.txt');

console.log('First');
fs.readFile(filePath, (err, data) => {
    if(err){
        console.log(err);
    }else console.log(data + "");
})
fs.readFile(path.join(__dirname, 'file2.txt'), (err, data) => {
    if(err){
        console.log(err);
    }else console.log(data + "");
})
fs.readFile(path.join(__dirname, 'file3.txt'), (err, data) => {
    if(err){
        console.log(err);
    }else console.log(data + "");
})

// 
console.log('second');