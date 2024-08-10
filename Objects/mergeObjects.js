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

// Method 1: Using for..in loop
const mergedObject1 = new Object(); // Singleton object
for (let key in obj1){
    mergedObject1[key] = obj1[key];
}
for (let key in obj2){
    mergedObject1[key] = obj2[key];
}
console.log(mergedObject1);

// Method 2: Using spread operator
const mergedObject2 = {...obj1, ...obj2};
console.log(mergedObject2);

// Method 3: Using assign method
const mergedObject3 = Object.assign({}, obj1, obj2);
console.log(mergedObject3);