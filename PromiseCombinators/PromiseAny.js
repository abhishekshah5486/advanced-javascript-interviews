const promiseOne = 13;
const promiseTwo = Promise.resolve("Promise two is resolved.");
const promiseThree = new Promise((res, rej) => {
    setTimeout(() => {
        const error = true;
        if (error) rej('ERROR: JS went wrong');
        else res('Promise three is resolved.');
    }, 2000);
})
const promiseFour = Promise.reject('Promise four is rejected.');
const promiseFive = Promise.reject('Promise five is rejected.');
// promiseFour.catch((err) => {
//     console.log(err);
// })

Promise.any([promiseFive, promiseFour, promiseThree]).then((values) => {
    console.log(values);
})
// Takes an array of promises as the input
// Resolves as soon as the first promise in the input array is resolved and returns with the value of resolved promise.
// If all the promises in the array are rejected, then it reject with an AggregateError containing all the rejected values of the promises.

