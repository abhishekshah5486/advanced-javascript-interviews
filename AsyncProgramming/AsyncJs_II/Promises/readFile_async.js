const fs = require('fs');
const path = require('path');

const f1_path = path.resolve(__dirname, '../f1.txt');
const f2_path = path.resolve(__dirname, '../f2.txt');
const f3_path = path.resolve(__dirname, '../f3.txt');

let f1_promise = fs.promises.readFile(f1_path);
f1_promise.then((data) => {
    console.log(data + "");
})
f1_promise.catch((err) => {
    console.log(err);
})
f1_promise.finally(() => {
    console.log("Promise complete. Resolved or rejected.")
})
console.log(f1_promise);

// promises are handled in a separate more priority queue called as micro-task queue.
// when a promise either resolves or rejects, the callback associated with .then() in case of resolve, or .catch() incase of reject
// and callback associated with finally() is put into the micro task queue for further execution with the help of event loop.

// VIP QUEUE ( Microtask queue )


