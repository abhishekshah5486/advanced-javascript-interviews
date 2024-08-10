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
console.log(jsUser);