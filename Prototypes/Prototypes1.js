var a = {
    x: 10,
    calculate: function(z){
        return this.x + this.y + z;
    }
}

// this keyword inside an object refers or points to the same object
// b should interit the properties of object a
var b = {
    y: 20,
    __proto__: a
}
// b is pointing to object a
// the proto of b is pointing to the properties of a.

console.log(b.x);

console.log(b.calculate(10));

// var c = {
//     y: 30,
//     x: 20,
//     __proto__: a
// }
// c is pointing to object a 
// all the properties of a are inherited by a
// c can access all of the properties of a

// c will first look for properties in its own scope (its own properties), if not found, then it will look up the prototype chain.
var c = {
    y: 30,
    x: 20,
    __proto__: b
}

// c is pointing to b, b in turn is pointing to a
// c has access to all properties of b and b has access to all the properties of a.
// Eventually, c has access to all the properties of a and b.