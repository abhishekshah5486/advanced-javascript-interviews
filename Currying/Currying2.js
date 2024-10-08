function sendAutoEmail(to){
    return function(subject){
        return function(body){
            return (`\nSending email to ${to}\nSubject: ${subject}\n${body}`);
        }
    }
}
const step1 = sendAutoEmail('abhishek.23bcs10065@scaler.com');
const step2 = step1('Deadline Extension CLI');
const step3 = step2('Kindly, extend the deadline for the CLI assignment.\nBest regards,\nAbhishek\n');
console.log(step3);

// Currying heavily relies on closures in js
// Currying uses the concept of closures to work effectively.

// Currying is a technique of evaluating functions with multiple arguments, into a sequence of functions with a single argument.
