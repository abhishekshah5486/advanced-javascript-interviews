var a = 10;
function fn(){
    console.log('Line number 4', a);
    var a = 20;
    a++;
    console.log('Line number 7', a);
    if (a){
        var a = 30;
        a++;
        console.log('Line number 11', a);
    }
    console.log('Line number 13', a);
}
fn();
console.log('Line number 2', a);

// Expected output:
// Line number 4 undefined
// Line number 7 21
// Line number 11 31
// Line number 13 31
// Line number 2 10