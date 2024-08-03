// let has block scope
let a = 10;
{
    let a = 20;
    console.log(a);
}
console.log(a);