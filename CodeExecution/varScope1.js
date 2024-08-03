var a = 10;
{
    var a = 20;
    console.log(a);
}
console.log(a);

// var is a function scope not a block scope variable
// var will only be treated different when it is inside a different function 
// Expected output: 20 20