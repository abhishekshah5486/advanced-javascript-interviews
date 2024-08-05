const promiseThree = new Promise((res, rej) => {
    setTimeout(() => {
        let error = true;
        if (!error){
            res({username: "Chai", email: "abhishek@gmail.com"});
        } else rej();
    }, 1000);
})

promiseThree.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})