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
promiseFour.catch((err) => {
    console.log(err);
})

