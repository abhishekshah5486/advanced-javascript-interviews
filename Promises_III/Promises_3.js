const promiseFive = new Promise((res, rej) => {
    setTimeout(() => {
        let error = true;
        if (error) {
            rej("Something went wrong.");
        }
        else {
            res({"name": "Abhishek Kumar Shah", "email": "abhishek@rapydlaunch.com"});
        }
    })
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

consumePromiseFive();