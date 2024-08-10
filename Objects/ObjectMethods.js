const user = {
    id: '123e4567-e89b-12d3-a456-426614174000',
    name: 'Abhishek Kumar Shah',
    age: 20,
    city: 'Bangalore',
    email: 'abhishek@google.com',
    password: 'abi@mac'
}

// Get all the keys of user
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// Validate if an object has a property or not
console.log(user.hasOwnProperty('name'));

