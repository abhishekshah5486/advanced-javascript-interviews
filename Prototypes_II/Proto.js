
var a = {
    x: 10,
    calculate: function(z)
    {
        return this.x + this.y + z;
    }
}

var b = {
    y: 20,
    __proto__: a
}

// __proto__ creates a link between the object a and b through the prototype chain
// b has access to all the properties and methods of object a
// in the context of b.calculate(10), this keywords refers to the object b
console.log(b.calculate(10));

// when the above method is called on b, js looks for calculate method in b directly, not found, goes down the prototype chaina and finds the calculate method.
// now it looks for x in b object directly, if not found, goes down the proto chain to find it. Similarly for variable y;

var c = {
    y: 30,
    x: 20,
    __proto__: b
}

// c can access all the properties and methods of obects b and a through the prototype chain
console.log(c.calculate(10));
