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


// Method 5: Using 