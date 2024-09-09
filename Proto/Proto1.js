var a = {
    x: 10,
    calculate: function(z){
        return this.x + z;
    }
}

// this keyword points to the current object and has access to all the properties of the object.

var b = {
    y: 20,
    __proto__: a
}
console.log(b.__proto__);

// using __proto__ creates a prototype link from b to a object
// b has access to all the properties/ methods of object a through the prototype chain

console.log(b.calculate(20));

var c = {
    y: 30,
    x: 20,
    __proto__: b
}

// proto of c points to object b and proto of b points to a creating a prototypical chain
// c has access to all the properties and methods of b and a through the prototypical chain
// if a property or method is not found in itself, it goes down the prototype chain to find the property or method.

console.log(c.calculate(10));
// Inheritence in js is known as prototypical inheritence.