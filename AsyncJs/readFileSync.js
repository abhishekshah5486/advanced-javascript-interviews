const fs = require('fs');
const path = require('path');

// Reading files synchronously in order
const filePath1 = path.join(__dirname, 'file1.txt');
const filePath2 = path.join(__dirname, 'file2.txt');
const filePath3 = path.join(__dirname, 'file3.txt');

fs.readFile(filePath1, (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data + "");
        fs.readFile(filePath2, (err, data) => {
            if(err){
                console.log(err);
            }else{
                console.log(data + "");
                fs.readFile(filePath3, (err, data) => {
                    if(err){
                        console.log(err);
                    }else{
                        console.log(data + "");
                    }
                })
            }
        })
    }
})
// Callback Hell where nested callbacks are used. This happens when multiple asynchronouse operations need to be performed in sequence, where each operation depends on the completion of the previous operation, leading to deeply nested callbacks.

