/*
arguments object is the object which contains an array of arguments passed to the function when the function was called.

like func(1,2,3,4) is a function's definition example, where the values were stored in the arguments object in the form of array, like : [1, 2, 3, 4]
can be accessed by arguments[0] = 1, arguments[1] = 2, arguments[2] = 3, arguments[3] = 4
*/

let show = function () {
    // for (let i=0; i<arguments.length; i++){
    // console.log(arguments[i]);

    for (let val of arguments) {
        console.log(val);
    }
};

show(1, 2, 3, 4);
