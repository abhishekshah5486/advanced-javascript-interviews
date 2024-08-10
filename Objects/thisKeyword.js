const jsUser = {
    name: 'Abhishek',
    age: 20,
    location: 'Bangalore',
    email: 'abhishek@meta.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Wednesday'],
    greeting: function(){
        console.log(`Hello, ${this.name}`);
    },
    greeting2: function(){
        console.log('Hello, Js User !');
    },
}

// this keyword points/ references to the current object
// using this keyword gives access to all the properties of the object
console.log(jsUser.greeting2());
console.log(jsUser.greeting());