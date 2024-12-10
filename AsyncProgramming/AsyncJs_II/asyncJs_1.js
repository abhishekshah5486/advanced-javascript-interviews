// Javascript is single threaded and synchronous

// how js handles asyncrhonous tasks

console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 2000);

setTimeout(() => {
    console.log(3);
}, 0);

console.log(4);

// Expected output: 1 4 3 2