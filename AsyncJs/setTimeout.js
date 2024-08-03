const myTimeoutMethod = () => {
    console.log('Welcome to IIM Bangalore.');
}
const timeoutId = setTimeout(myTimeoutMethod, 1000);
clearTimeout(timeoutId);

// Runs only once after the specified time delay.