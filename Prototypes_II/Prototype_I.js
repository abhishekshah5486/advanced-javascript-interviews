// Prototype is an object which is used for iheritence in javascript.
// Inheritence in js known as prototypical inheritence.

function foo(y)
{
    this.y = y;
}

// Prototype is an object available in all constructor functions.
foo.prototype.x = 10;
foo.prototype.calculate = function(z)
{
    return this.x + this.y + z;
}

console.log(typeof (foo.prototype));
// Prototype is an object used for iheritence

var b = new foo(20);
console.log(b.calculate);

// __proto__ of the object instance b points to foo.prototype and can access all methods and properties of foo.prototype object of the constructor function