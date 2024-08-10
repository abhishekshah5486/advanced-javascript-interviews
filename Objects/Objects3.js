const sampleData = {
    name: "John Doe",
    age: 30,
    isActive: true,
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: 10001,
        coordinates: {
            lat: 40.7128,
            lng: -74.0060
        }
    },
    skills: ["JavaScript", "React", "Node.js"],
    experience: [
        {
            company: "ABC Corp",
            role: "Frontend Developer",
            years: 3,
            projects: [
                {
                    name: "Project Alpha",
                    duration: "6 months",
                    stack: ["HTML", "CSS", "JavaScript"]
                },
                {
                    name: "Project Beta",
                    duration: "1 year",
                    stack: ["React", "Redux", "TypeScript"]
                }
            ]
        },
        {
            company: "XYZ Inc",
            role: "Backend Developer",
            years: 2,
            projects: [
                {
                    name: "Project Gamma",
                    duration: "8 months",
                    stack: ["Node.js", "Express", "MongoDB"]
                },
                {
                    name: "Project Delta",
                    duration: "10 months",
                    stack: ["GraphQL", "Apollo", "PostgreSQL"]
                }
            ]
        }
    ],
    contact: {
        email: "john.doe@example.com",
        phone: "+1-234-567-8901",
        social: {
            linkedin: "linkedin.com/in/johndoe",
            github: "github.com/johndoe"
        }
    }
};

// Looping through an object in js
// Method 1: Using for....in method
for (let key in sampleData){
    console.log(sampleData[key]);
}

// Method 2: Keys() method
const keys = Object.keys(sampleData);
console.log(keys);
keys.forEach((key) => {
    console.log(sampleData[key]);
})

// Method 3: Using for...of method
const keys2 = Object.keys(sampleData);
for (let key of keys2){
    console.log(`${key} : ${sampleData[key]}`);
}

// Method 4: Using values() Method
const values = Object.values(sampleData);
values.forEach((value) => {
    console.log(value);
})

// OR 
for (let value of values){
    console.log(value);
}

// Method 5: Using entries() Method
const entries = Object.entries(sampleData);
entries.forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
})

// Alternatively
for (let [key, value] of Object.entries(sampleData)){
    console.log(`${key} : ${value}`);
}

const jsUser = {
    name: 'Abhishek',
    age: 20,
    location: 'Bangalore',
    email: 'abhishek@meta.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Wednesday']
}
const mySym = Symbol('myKey1');
jsUser[mySym] = 'Hello, my symbol';
console.log(jsUser);

// Method 6: Using Object.getOwnPropertyNames
const keys3 = Object.getOwnPropertyNames(sampleData);
// Returns an array containing all the properties of an object
console.log(keys3);
// Using Object.getOwnPropertySymbols
const keys4 = Object.getOwnPropertySymbols(sampleData);
// Returns an array of all the symbol properties found on an array.
console.log(keys4);
// Using Reflect.ownKeys();
const keys5 = Reflect.ownKeys(sampleData);
// Returns an array of all property keys including the symbol keys.
console.log(keys5);
