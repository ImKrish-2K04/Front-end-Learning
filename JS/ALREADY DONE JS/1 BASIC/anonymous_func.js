// anonymous function is a function without a name.
// simply when we are creating an anonymous function, we are not giving a name to it but we are assigning it to a variable. if we are watching it more conciousnessly then we can understand that this is same as the normal function...

let sum = function (a, b) {
    return a+b;
}

console.log(sum(2, 3));

// now we are going to use an arrow function.
// arrow function is a function which is created using the => operator.
// it is also a type of anonymous function..
// here, if there is one parameter is required then the paranthesis is not necessary.
// if there is a single statement, then the curly braces are not necessary.
// if we have to use a return statement then we must have to use curly braces, even if the return statement is only one statement to that function.

// ! NOTE : maybe the upper last 2 points are wrong, because when we are writing a single statement without a curly braces at the time of using arrow function, it simply meaned by it returns this single statement without the need of return keyword... and if we have to return something insinde a curly braces then we have to use the return keyword necessary...

let fName = (firstName, lastName) => {
    return firstName + " " + lastName;
}

console.log("\n" + fName("Rohit", "Sharma"));

// immediately invoked function expression (IIFE)
// it is a function which is executed immediately after its creation.
// to create it, we have to create the anonymous function inside a paranthesis and then we have to call it by using the paranthesis immediately after it.

(
    () => {
        console.log("\nHello World!");
    }
)();