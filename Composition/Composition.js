// What is composition in js
function add(a, b){
    return a+b;
}

function square(val){
    return val*val;
}
function addAndSquare(a, b){
    return square(add(a, b));
}

function product(a, b){
    return a*b;
}
function moduloBy3(val){
    return val%3;
}
// const addResult = add(2, 4);
// console.log(addResult);
// console.log(square(addResult));
console.log(addAndSquare(2, 3));
function composeTwoFunction(fn1, fn2){
    return function(a, b){
        return fn2(fn1(a, b));
    }
}
const task = composeTwoFunction(add, square);
const task2 = composeTwoFunction(product, moduloBy3);
// console.log(task(2, 3));
console.log(task2(5, 7));