/*
MY UNDERSTANDING:
-----------------
a closure in java script is a function which have an access to its parent function's scope and the global scope even if it has its own local scope, means a function which can access the global data, its parent function's data and obviously its own data!

PROVIDED BY GPT-3.5:
--------------------

- A closure is indeed a function that has access to its own scope (local variables), the scope of its parent function, and the global scope.
- This means that a closure can access variables defined in its own scope, as well as variables defined in the scope of the function in which it was defined (its parent function).
- Furthermore, a closure retains access to these variables even after the parent function has finished executing.
- Closures are powerful because they allow functions to "remember" and access variables from their lexical scope, even when they are executed outside of that scope.
*/

let gv1 = 1;
let gv2 = 2;

function outerFunction(){
    let of1 = 100;
    let of2 = 200;

    (function(){
        let if1 = 10;
        let if2 = 20;

        console.log(`GLOBALS :-> gv1: ${gv1}, gv2: ${gv2}\n`);
        console.log(`sum of ${of1} and ${of2} is ${of1+of2}.\n`);
        console.log(`sum of ${if1} and ${if2} is ${if1+if2}.`);
    })();
}

outerFunction();