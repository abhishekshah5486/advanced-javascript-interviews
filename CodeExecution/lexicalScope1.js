function fxn(){
    // console.log(a);
    function gxn(){
        var a = 30;
        function gxn2(){
            console.log(a);
        }
        gxn2();
    }
    gxn();
}
fxn();

// Actual Output: 30
// Expected Output: 30

function fxn(){
    console.log(a);
    function gxn(){
        var a = 30;
        function gxn2(){
            console.log(a);
        }
        gxn2();
    }
    gxn();
}
fxn();
// Actual output: a is not defined
// Expected output: a is not defined