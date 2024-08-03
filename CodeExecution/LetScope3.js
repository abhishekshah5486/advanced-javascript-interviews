// let a = 10;
// console.log('Line number 2 ', a);
// function fn(){
//     console.log('Line number 4 ', a);
// }
// fn();
// console.log('Line number 16 ', a);

// Expected output: 
// Line number 2  10
// Line number 4  10
// Line number 16  10

// let a = 10;
// console.log('Line number 2 ', a);
// function fn(){
//     console.log('Line number 4 ', a);
//     let a = 20;
// }
// fn();
// console.log('Line number 16 ', a);

// Cannot access a before initialization 
// before initialization variable a inside fn is put in the TDZ(Temporal Dead Zone) due to the behaviour of let and cannot be accessed before initialization.

let a = 10;
console.log('Line number 2 ', a);
function fn(){
    console.log('Line number 4 ', a);
    // let a = 20;
    a++;
    console.log('Line number 7', a);
    console.log('Line number 13', a);
}
fn();
console.log('Line number 16 ', a);

// Expected output:
// Line number 2 10
// Line number 4 10
// Line number 7 11
// Line number 13 11
// Line number 16 11


