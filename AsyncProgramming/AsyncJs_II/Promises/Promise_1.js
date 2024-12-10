const promise = new Promise((resolve, reject) => {
    let a = 5;
    let b = 5;

    if (a != b) {
        resolve("Success. Promise is resolved.");
    }
    else {
        reject("No they are not equal. Promise rejected.");
    }
});

promise.then((data) => {
    console.log("Promise has been resolved.")
    console.log(data);
})
promise.catch((err) => {
    console.log("Promise failed.");
    console.log(err);
})
promise.finally(() => {
    console.log("Promise complete.");
})
// Initially promise is in PENDING state.
console.log(promise);

