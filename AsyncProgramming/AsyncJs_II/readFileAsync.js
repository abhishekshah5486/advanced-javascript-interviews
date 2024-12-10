const fs = require('fs');
const path = require('path');

// const f1_path = path.resolve(__dirname, 'f1.txt');
// let f1 = fs.readFileSync(f1_path);
// console.log(f1 + "");

// let f2_path = path.resolve(__dirname, 'f2.txt');
// let f2 = fs.readFileSync(f2_path);
// console.log(f2 + "");

// let f3_path = path.resolve(__dirname, 'f3.txt');
// let f3 = fs.readFileSync(f3_path);
// console.log(f3 + "");

const f1_path = path.resolve(__dirname, 'f1.txt');
fs.readFile(f1_path, (err, data) => {
    if (err) {
        console.log(err);
    }
    else console.log(data + "");
})

let f2_path = path.resolve(__dirname, 'f2.txt');
fs.readFile(f2_path, (err, data) => {
    if (err) {
        console.log(err);
    }
    else{
        console.log(data + "");
    }
})

let f3_path = path.resolve(__dirname, 'f3.txt');
fs.readFile(f3_path, (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data + "");
    }
})