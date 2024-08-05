const promiseTwo = new Promise((res, rej) => {
    setTimeout(() => {
        res()
    }, 1000);
})