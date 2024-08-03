function fxn(){
    let a = 10;
    function gxn(){
        console.log(a);
    }
    return gxn;
}
let innerFxn = fxn();
innerFxn();

// Calculated output: 10
// Expected output: 10
// Verdict: correct

// Closures in javascript
// Closure in js is a feature which allows the inner functions to access the variables of the outer function, even after the outer function has returned or completed its execution. Closure allows a function to remember the environment in which it was created.