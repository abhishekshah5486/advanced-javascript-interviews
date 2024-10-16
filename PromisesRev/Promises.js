// Promise creating and consuming promises

// Pending
// Fulfilled
// Rejected

// Creating a promise
const newPromise = new Promise(function(resolve, reject)
{
    // Do an async task
    setTimeout(() => {
        console.log("Async task is complete.");
        resolve();
    }, 1000);
});

newPromise.then(() => {
    console.log('Promise consumed.');
})

new Promise((res, rej) => {
    setTimeout(() => {
        console.log('Async task 2 complete.');
        res();
    }, 1000);
})
.then(() => {
    console.log('Promise resolved.')
})
.catch(() => {
    console.log('Promise rejected.');
})
.finally(() => {
    console.log('Promise completed.');
})
