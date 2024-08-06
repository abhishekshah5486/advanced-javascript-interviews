const promiseOne = 13;
const promiseTwo = Promise.resolve("Promise two is resolved.");
const promiseThree = new Promise((res, rej) => {
    setTimeout(() => {
        const error = true;
        if (error) rej('ERROR: JS went wrong');
        else res('Promise three is resolved.');
    }, 2000);
})
// const promiseFour = Promise.reject('Promise four is rejected.');
const promiseFive = Promise.resolve('Promise five is resolved.');
// promiseFour.catch((err) => {
//     console.log(err);
// })

// Promise.race takes an array of promises.
// Resolves or rejects as soon as the first promise in the array resolves or rejects.
// Resolves or rejects with the value/reason of the promise 
// Returns a single promise.
Promise.race([promiseThree, promiseFive])
.then((value) => {
    console.log(value);
})
.catch((err) => {
    console.log(err);
})