// before we have learnt about how to pass an anonymous function to any function as a parameter, let's learn about how to return an anonymous function from another function.

// here we have to create an multiplier that multiplies a value by receiving a factor and value...

const doMultiply = (factor) => {
    return (num) => {
        return num * factor;
    }
}

const double = doMultiply(2);
const triple = doMultiply(3);

let num = 10;

console.log(`the double of the ${num} is ${double(num)}.`);

console.log(`the triple of the ${num} is ${triple(num)}.`);