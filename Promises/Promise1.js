const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // Database connection
    // Network Calls
    // DB calls
    // SetTimout, Cryptography
    setTimeout(function(){
        console.log('Async task is complete.');
        resolve();
    }, 1000);
});

// A promise takes a callback function (resolve, reject)
promiseOne.then(() => {
    console.log('Promise consumed.');
})

new Promise((res, rej) => {
    setTimeout(() =>{
        console.log('Async task 2 is complete');
        res();
    }, 2000);
}).then(() => {
    console.log('Promise complete.')
})
