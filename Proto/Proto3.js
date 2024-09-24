// const obj1 = { a: 1 };
// const obj2 = { b: { c: 2 } };

// const clonedObject = (obj2) => {
//     const obj = {};
//     const keys = Object.keys(obj2);
//     for (let key of keys)
//     {
//         if (typeof(obj2[key]) === 'object')
//         {
//             obj[key] = clonedObject(obj2[key]);
//         }
//         else{
//             obj[key] = obj2[key];
//         }
//     }
//     return obj;
// }

// const clonedObj = clonedObject(obj2);
// obj1.__proto__ = clonedObj;
// console.log(obj1.b === obj2.b);

const a = new Number(20.23);
console.log(typeof a);

Number.prototype.integer = function(){
    console.log(Math.trunc(this));
}
a.integer();

