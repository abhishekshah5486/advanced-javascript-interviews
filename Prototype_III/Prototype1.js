// Prototype is an object which is used for inheritence in js
// Inheritence in js is known as prototypical inheritence.

// Constructor function in js
// All constructor fn have the prototype object by default
function foo(y)
{
    this.y = y;
}

foo.prototype.x = 10;
foo.prototype.calculate = function(z)
{
    return this.x + this.y + z;
}

console.log(typeof foo.prototype);
var a = new foo(20);
var b = new foo(30);
// __proto__ of a points to the prototype object of constructor fn
// a has access to all the properties and methods of prototype object of the constructor fn
// Proto of every instance of constructor fn points to the prototype of constructor fn

// Proto is a pointer, which points to an object
// Prototype is an object

Object.getPrototypeOf(a).calculate = function()
{
    console.log('hello world');
}
console.log(b.calculate());

// All the instances share the same reference to the prototype object of the constructor fn
// Each instance gets its own copy of properties and methods defined inside the constructor fn.

