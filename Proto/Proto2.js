// constructor function
function foo(y){
    this.y = y;
    this.calculate = function(){
        console.log("Hello World.");
    }
}

foo.prototype.x = 20;
foo.prototype.calculate = function(z){
    return this.x + z;
}

// var a = new foo(10);
// console.log(a.__proto__);
// Every constructor fn has a prototype object
// Creating an instance of constructor fn, the __proto__ or [[prototype]] of the instance points to the prototype object (foo.prototype) of the constructor fn

// var a = [];
// var a = new Array(0);

// console.log(a);

var b = new foo(10);
b.calculate();

var a = new foo(10);
a.calculate = function(){
    console.log("Hello");
}
a.calculate();
b.calculate();

a.__proto__.calculate = function(){
    console.log('Function definition changed.');
}
a.__proto__.calculate();
b.__proto__.calculate();

// The function inside a constructor fn is copied inside every instance of constructor fn
// but incase of prototype, the fn is present at one location and is referenced by all objects.

var a = [2, 3, 4];
Array.prototype.double = function(){
    return a.map((x) => (2 * x));
}
console.log(a.double());


