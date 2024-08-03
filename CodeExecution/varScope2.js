var a = 10;
function fn(){
    console.log('Line number 4', a);
    var a = 20;
}
fn();
console.log('Line number 2', a);

// Expected output:
// Line number 4 undefined
// Line number 2 10