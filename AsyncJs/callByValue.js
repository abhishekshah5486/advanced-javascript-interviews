function fxn(num, obj){
    num = 20;
    console.log('Inside fxn --> ', num);
    obj.city = 'Delhi';
    console.log(obj);
    obj = {
        name: "Divyanshu"
    }
    console.log(obj);
}
let b = 10;
let c = {
    name: "Abhishek"
}
// c doesn'y directly store the object itself, rather it stores the reference or address
// of the memory location of the object.
// Objects are stored in heap memory.
fxn(b, c);
console.log('Outside fxn --> ', b);
console.log(c);

// Expected output
// Inside fxn --> 20
// {
//     name: "Abhishek",
//     city: "Delhi"
// }
// {
//     name: "Divyanshu"
// }
// console.log(Outside fxn --> 10);
// {
//     name: "Abhishek",
//     city: "Delhi"
// }