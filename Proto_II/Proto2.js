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
    __proto__: a
}

console.log(c.calculate(10));
// Expected output: 10 + 25 + 30 = 65
// Expected output: 10 + 30 + 10