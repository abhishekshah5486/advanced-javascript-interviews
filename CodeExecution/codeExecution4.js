var a = 10;

function fxn(){
    console.log(a);
    var a = 20;
    function gxn(){
        console.log(a);
    }
    gxn();
}
fxn();

// Lexical Scoping in js
// Each function has it's own scope. If a fn is defined inside another function,it has access to the variables in the current scope, as well as the scope of the outer functions.
// If a variable in not found in the current scope, it will try to search for it in the outer function scope and so on, until it reaches the global execution scope.
// This is known as lexical scope.
// The variables and functions of the outer function/scope are available inside the lexical scope in the current scope
// Lexical inside the current scope has access to the methods and variables of it's parent scope
