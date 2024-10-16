const fs = require('fs');
const path = require('path');

// readFileSync (Blocking main thread)
// readFile (asynchronous)

fs.readFile(path.join(__dirname, 'file1.txt'), (err, data) => {
    if (err)
    {
        console.log(err);
    }
    else console.log(data + "");
});
fs.readFile(path.join(__dirname, 'file2.txt'), (err, data) => {
    if (err)
    {
        console.log(err);
    }
    else console.log(data + "");
});
fs.readFile(path.join(__dirname, 'file3.txt'), (err, data) => {
    if (err)
    {
        console.log(err);
    }
    else console.log(data + "");
});