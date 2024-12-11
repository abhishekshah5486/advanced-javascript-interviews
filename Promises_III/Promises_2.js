// const promiseTwo = new Promise((res, rej) => {
//     setTimeout(() => {
//         res({"name": "Abhishek Kumar Shah", "email": "abhishek@rapydlaunch.com"});
//     }, 100)
// })
// promiseTwo.then((data) => {
//     console.log(data);
// })

const promiseThree = new Promise((res, rej) => {
    setTimeout(() => {
        let error = false;
        if (error) {
            rej("Something went wrong.");
        }
        else {
            res({"name": "Abhishek Kumar Shah", "email": "abhishek@rapydlaunch.com"});
        }
    })
})
promiseThree.then((data) => {
    console.log(data);
    return data.email;
}).then((email) => {
    console.log(email);
}).catch((err) => {
    console.log(err);
})
