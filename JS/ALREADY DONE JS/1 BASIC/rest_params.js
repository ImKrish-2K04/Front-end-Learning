/*
here we are going to understand the rest parameters...

before we have seen about the arguments object and its example also.

arguments object is the object which contains an array of arguments passed to the function when the function was called, but here the rest parameter is the parameter which is used to store the rest of the arguments passed to the function.

here we can use normal parameters and rest parameter at the same time in a function definition.

rest parameter can be defined by three dots following by a name. like, '...args'

EX.


*/

function sum(val1, val2, ...args) {
    let sum = 0;
    sum = val1 + val2;
    console.log("val1:", val1);
    console.log("val2:", val2);
    for (let val of args) {
        console.log(`val${val}:`, val);
        sum += val;
    }

    return sum;
}

let result = sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(`\nthe result of sum is ${result}.`);
