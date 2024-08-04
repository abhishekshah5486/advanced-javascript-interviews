// console.log("1");
// console.log("4");
// setTimeout( function cb1(){
//     console.log('2');
// }, 2000);

// console.log('3');
// Expected output: 1 4 2
// Expected output: 1 4 3 2

console.log('1');
setTimeout(() => {
    console.log('3');
}, 0);
console.log('4');

// Expected output: 1 4 3