const fs = require('fs');
const path = require('path');

// readFileSync (Blocking main thread)
// readFile (asynchronous)

fs.readFile(path.join(__dirname, 'file1.txt'), (err, data) => {
    if (err)
    {
        console.log(err);
    }
    else{
        console.log(data + "");
        fs.readFile(path.join(__dirname, 'file2.txt'), (err, data) => {
            if (err)
            {
                console.log(err);
            }
            else 
            {
                console.log(data + "");
                fs.readFile(path.join(__dirname, 'file3.txt'), (err, data) => {
                    if (err)
                    {
                        console.log(err);
                    }
                    else console.log(data + "");
                });
                
            }
        });
    }
});

// Callback hell is also known as Pyramid of Doom
// It occurs when multiple asynchronous tasks depend on the result or completion of another task
// It is solved by nesting callbacks leading to deeply nested chain
// Promises resolve the issue of callback hell.