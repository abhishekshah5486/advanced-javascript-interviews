// Prototype is an object which is used for inheritence in js
// Inheritence in js is known as Prototypical Inheritence.

function foo(y){
    this.y = y;
}

var a = new foo(10);
// Prototype is an object which is available in all the constructor functions.
foo.prototype.x = 10;
foo.prototype.calculate = function(z){
    return this.x + this.y + z;
}
console.log(a);