var a = [1, 2, 3];

Array.prototype.double = function()
{
    return this.map((num) => (2 * num));
}

Object.getPrototypeOf(a).triple = function()
{
    return this.map((num) => (num * 3));
}
console.log(a.double());
console.log(a.triple());