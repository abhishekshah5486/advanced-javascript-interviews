let a = 2;
{
    let a = 3;
    console.log(a);
}
console.log(a);

// Calculated Output: 3 2
// Expected output: 3 2
// Verdict: true
// If the variable is not found in the current scope, it will take reference from the parent scope.