const promiseFour = new Promise((res, rej) => {
    setTimeout(() => {
        let error = false;
        if (!error){
            res({username: "Chai", email: "abhishek@gmail.com"});
        }else rej();
    }, 1000);
})

promiseFour.then((data) => {
    console.log(data);
    return data.username;
}).then((username) => {
    console.log(username);
}).catch(() => {
    console.log('Something went wrong.');
})