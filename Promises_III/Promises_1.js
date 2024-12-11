const promiseOne = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Async task is complete.");
        resolve();
    }, 1000)
});

promiseOne.then(() => {
    console.log("Promise consumed.");
})

new Promise((res, rej) => {
    setTimeout(() => {
        console.log("Async task 2");
        res();
    }, 1000);
})
.then(() => {
    console.log("Async 2 resolved.");
})
.catch(() => {
    console.log("Promise rejected.")
})