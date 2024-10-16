const newPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res({
            'name' : 'Abhishek',
            'email' : 'abhishek@google.com',
        });
    }, 1000);
})

newPromise.then((data) => 
{
    console.log(data.name);
    console.log(data.email);
})
newPromise.catch((err) => 
{
    console.log('Promise rejected'); 
})