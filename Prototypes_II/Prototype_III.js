var a = [1, 2, 3];

// METHOD 1 : Adding a method to the object a itself
a.double = function()
{
    return this.map((val) => (2 * val));
}

console.log(a.double());

// METHOD 2: Using prototype of Array Object
Object.getPrototypeOf(Array).double = function()
{
    return this.map((val) => (2 * val));
}

console.log(a.double());