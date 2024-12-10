const fs = require('fs');
const path = require('path');

const f1_path = path.resolve(__dirname, '../f1.txt');
const f2_path = path.resolve(__dirname, '../f2.txt');
const f3_path = path.resolve(__dirname, '../f3.txt');

const f1_promise = fs.promises.readFile(f1_path);
const f2_promise = fs.promises.readFile(f2_path);
const f3_promise = fs.promises.readFile(f3_path);

f1_promise.then((data) => {
    console.log(data + "");
})
f2_promise.then((data) => {
    console.log(data + "");
})
f3_promise.then((data) => {
    console.log(data + "");
})