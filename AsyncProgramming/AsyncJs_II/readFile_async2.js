const fs = require('fs');
const path = require('path');

// Callback hell ( performing asynchronous tasks in sequence )
const f1_path = path.resolve(__dirname, 'f1.txt');
fs.readFile(f1_path, (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data + "");
        let f2_path = path.resolve(__dirname, 'f2.txt');
        fs.readFile(f2_path, (err, data) => {
            if (err) {
                console.log(err);
            }
            else{
                console.log(data + "");
                let f3_path = path.resolve(__dirname, 'f3.txt');
                fs.readFile(f3_path, (err, data) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(data + "");
                    }
                })
            }
        })
    }
})

// CALLBACK HELL: Aynchronous tasks serially with the help of callbacks leads to callback hell



