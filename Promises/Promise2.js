const promiseTwo = new Promise((res, rej) => {
    setTimeout(() => {
        res({username: "Chai", email: "abhishek@gmail.com"});
    }, 1000);
})

promiseTwo.then((data) => {
    console.log(data);
})