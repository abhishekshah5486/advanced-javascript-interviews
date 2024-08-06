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