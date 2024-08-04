// console.log('1');

// setTimeout(() => {
//     console.log('23');
// }, 1000);

// setTimeout(() => {
//     console.log('21');
// }, 0)

// console.log('4');

// Expected output: 1 4 21 22

// Write a code which runs infinitely without actually 
// blocking the main thread
setTimeout(() => {
    while(true){
        console.log('Hello');
    }
}, 0);