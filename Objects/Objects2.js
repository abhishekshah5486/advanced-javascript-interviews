const spotifyUser = new Object(); // Singleton object
// const spotifyUser = {}; // Non-singleton object
// console.log(spotifyUser);
spotifyUser.id = 'f47ac10b-58cc-4372-a567-0e02b2c3d479';
spotifyUser.username = 'abi@lyrics'
spotifyUser.email = 'abhishek.23bcs10065@ms.sst.scaler.com';

// console.log(spotifyUser);
spotifyUser.fullName = {
    firstname: 'Abhishek Kumar',
    lastname: 'Shah'
}
console.log(spotifyUser);
console.log(spotifyUser.fullName?.firstname);
console.log(spotifyUser.fullName?.lastname);

// Merging 2 objects
const obj1 = {
    id: '123e4567-e89b-12d3-a456-426614174000',
    name: 'Abhishek Kumar Shah',
    age: 20,
    city: 'Bangalore'
}
const obj2 = {
    email: 'abhishek@google.com',
    password: 'abi@mac'
}

// Method: Using the spread operator to merge 2 objects
const mergedObject = {...obj1, ...obj2};
console.log(mergedObject);

