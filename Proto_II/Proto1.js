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

var c = {
    y: 30,
    x: 25,
    __proto__: a
}

const aPrototype = Object.getPrototypeOf(a);
// proto of a points to Object.Prototype (top level prototype object in js)
// and proto of Object.Prototype points to null
console.log(Object.getPrototypeOf(aPrototype));
// b has access to all the properties of object a
// c also has access to all the properties of object a
// b proto points to object a
// console.log(Object.getPrototypeOf(b));