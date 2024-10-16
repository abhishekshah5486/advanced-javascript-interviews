// Javascript is single threaded and synchronous

console.log(1);

setTimeout(() => {
    console.log(3);
}, 2000);

setTimeout(() => {
    console.log(4);
}, 0);
console.log(2);
