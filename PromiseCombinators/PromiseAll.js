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
promiseFour.catch((err) => {
    console.log(err);
})

// Promise.all([promiseOne, promiseFour, promiseThree])
// .then((values) => {
//     console.log(values);
// })
// .catch((err) => {
//     console.log(err);
// })
Promise.allSettled([promiseOne, promiseThree, promiseTwo]).then((values) => {
    console.log(values);
})
// promise.allSettled is going to work on all the promises even if it is a rejection.
// It returns an array of both fulfillments and rejections of the promises passed in the array argument.
// It provides an array of objects that each describe the outcome of each promise, whether it was fulfilled or rejected.
// Expected output:
// [
//     { status: 'fulfilled', value: 13 },
//     { status: 'rejected', reason: 'ERROR: JS went wrong' },
//     { status: 'fulfilled', value: 'Promise two is resolved.' }
//   ]

