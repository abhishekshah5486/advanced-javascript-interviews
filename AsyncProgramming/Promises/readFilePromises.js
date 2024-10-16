const fs = require('fs');
const path = require('path');


new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, '../file1.txt'), (err, data) => {
        if (err)
        {
            reject(err);
        }
        else resolve(data);
    });
})
.then((data) => {
    console.log(data + "");
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, '../file2.txt'), (err, data) => {
            if (err)
            {
                reject(err);
            }
            else resolve(data);
        });
    })
})
.then((data) => {
    console.log(data + "");
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, '../file3.txt'), (err, data) => {
            if (err)
            {
                reject(err);
            }
            else resolve(data);
        });
    })
})
.then((data) => {
    console.log(data + "");
})
.catch((err) => {
    console.log(err);
})


// Promise chaining or Promise Hell
// Resolved Promise chaining or promise hell as well as callback hell for reading files syncrhonously without blocking the main thread.