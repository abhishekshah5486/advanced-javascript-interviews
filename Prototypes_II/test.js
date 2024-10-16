var obj = {
    key1: null,
    key2: 20,
    key3: null,
    key4: function calculate()
    {
        console.log("Hello");
    }
}

let newObj = new Object();
for (let key in obj)
{
    if (obj[key] !== null)
    {
        newObj[key] = obj[key];
    }
}
console.log(newObj);