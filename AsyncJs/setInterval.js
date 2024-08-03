let a = 0;

const myIntervalMethod = () => {
    if (a == 2) clearInterval(intervalId);
    console.log(a);
    console.log('Welcome to IIM Bangalore.');
    a++;
}
const intervalId = setInterval(myIntervalMethod, 1000);

// Executes after every 1000ms time interval.