var a = [];

// proto of a points to prototype of Array constructor function
// a can access all the methods and properties of Arrays.

var b = new Array();
console.log(b);
console.log(b.__proto__);

// Proto is a pointer 
// Prototype is an object. Constructor class or fn has the prototype object
// proto of instances points to the prototype object of constructor functions

function foo(y)
{
    this.y = y;
    this.calculate = function(z)
    {
        return (this.y + z);
    }
}

foo.prototype.greet = function()
{
    console.log("Hello world.")
}

var a = new foo(10);
// console.log(a.calculate(20));
a.calculate = function()
{
    return "Hello World";
}
var b = new foo(20);

// When an object is created from a constructor function, the properties defined inside the constructor fn are copied for each object.
// Each object gets its own copy of properties, making any changes to the properties in any one of the objects won't affect the properties of other objects.
// Prototype is common among all the instances of the constructor function, making any changes to the properties of the prototype object affects all the instances of the constructor fn.
a.greet();
a.greet = function()
{
    console.log("Warm greetings, Welcome to Oxford University, CSE");
}

a.greet();
b.greet();

a.__proto__.greet = function()
{
    console.log('ISB YLP Program for young innovators.');
}

b.greet();