// What is composition in js
function add(...args){
    return args.reduce((a, b) => a+b, 0);
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
// console.log(addAndSquare(2, 3));
function composeTwoFunction(fn1, fn2){
    return function(a, b){
        return fn2(fn1(a, b));
    }
}
// const task = composeTwoFunction(add, square);
// const task2 = composeTwoFunction(product, moduloBy3);
// console.log(task(2, 3));
// console.log(task2(5, 7));
// Modern Javascript
// const composeTwoFunction2 = (fn1, fn2) => (a, b) => fn2(fn1(a, b));
// console.log(composeTwoFunction2(add, moduloBy3)(5, 3));

// Composing infinite functions
// const composeTwoFunction3 = (...fns) => (...values) => fns.reduceRight((a, b) => b(a), values);
const composeTwoFunction3 = (...fns) => (...values) => {
    // Apply functions from right to left
    return fns.reduceRight((acc, fn, index) => {
        // For the first function, apply it to the values directly
        if (index === fns.length - 1) {
            return fn(...values);
        }
        // For subsequent functions, apply them to the accumulated result
        return fn(acc);
    }, undefined);
};
const task3 = composeTwoFunction3(add, square, moduloBy3);
console.log(task3(2, 3, 4));