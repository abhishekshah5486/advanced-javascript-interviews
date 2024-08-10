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

