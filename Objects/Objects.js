const jsUser = {
    name: 'Abhishek',
    age: 20,
    location: 'Bangalore',
    email: 'abhishek@meta.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Wednesday']
}

console.log(jsUser['name']);
console.log(jsUser.name);
// Using symbol as a key in object
const mySym = Symbol('mykey1');
jsUser[mySym] = 'Hello, symbol !';
console.log(typeof jsUser[mySym]);

// Freeze keyword in objects
// Object.freeze(jsUser);
// Object is freezed , that is no changes are propagated once freezed.
// Object is locked.
// jsUser.name = 'Divyanshu';
// console.log(jsUser);

jsUser.greeting = () => {
    console.log('Hello Js User.');
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());