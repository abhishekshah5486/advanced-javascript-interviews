const fs = require('fs');
const path = require('path');

// let myPromise = new Promise((resolve, reject) => {
//     fs.readFile(path.resolve(__dirname, '../file1.txt'), (err, data) => {
//         if (err)
//         {
//             reject(err);
//         }
//         else resolve(data);
//     });
// })

// myPromise.then((data) => {
//     console.log(data + "");
// })
// myPromise.catch((err) => {
//     console.log(err);
// })

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
    new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, '../file2.txt'), (err, data) => {
            if (err)
            {
                reject(err);
            }
            else resolve(data);
        });
    })
    .then((data) => {
        console.log(data + "");
        new Promise((resolve, reject) => {
            fs.readFile(path.resolve(__dirname, '../file3.txt'), (err, data) => {
                if (err)
                {
                    reject(err);
                }
                else resolve(data);
            });
        })
        .then((data) => {
            console.log(data + "");
        })
        .catch((err) => {
            console.log(err);
        })
    })
    .catch((err) => {
        console.log(err);
    })

})
.catch((err) => {
    console.log(err);
})


// Promise chaining or Promise Hell