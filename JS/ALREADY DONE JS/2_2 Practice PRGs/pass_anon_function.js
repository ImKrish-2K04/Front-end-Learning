// in this tut we are going to learn about how to pass an anonymous function to any function as a parameter.

// we have to pass an anonymous function that returns the value after making its double.

// we have to create a function in which we can pass an array of numbers and an anonymous function that performs some operation like doubling or making its squares. that function also haves an empty array at start but after looping we have to push the values into that array as per the passed function modifies it...

// let's do it!

const getResult = (arr, operation) => {
    let nums = [];
    for (let i of arr) {
        nums.push(operation(i));
    }

    return nums;
}

// let's create an anonymous function that doubles the value.

// const double = (num) => {
//     return num * 2;
// }

// let's create an anonymous function that returns square of the value.

// const square = (num) => {
//     return num * num;
// }

// let's create an array of numbers.

let numArr = [1,2,3,4,5];

// let's pass the array and the anonymous function to the getResult function.

let doubleResult = getResult(numArr, (num) => {
    return num * 2;
});

let squareResult = getResult(numArr, (num) => {
    return num * num;
});

console.log(`the resultant array after doubling the values is ${doubleResult}.\n`);
console.log(`the resultant array after squaring the values is ${squareResult}.`);