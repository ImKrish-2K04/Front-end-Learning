// Here, we are going to learn about the 'prototype' object in some depth.

// In JavaScript, the parent object of each and every object is 'Object'. It is even the object of the 'prototype' object.

// JavaScript follows a bottom-up approach, meaning that if we need to find a 'color' property in an object of the Mobile class, such as a 'samsung' object,

// The JavaScript engine will first search for the 'color' property in the 'samsung' object. If it doesn't find it, then it will search in the prototype of 'Mobile'. If 'Mobile' also does not have that property, then it will continue searching in the prototype of 'Mobile's' prototype, and so on...

// Let's delve deeper!

// let str = new String();
// str = "Harry! How are you?";
// console.log(str);

// Here, we are going to learn how the prototype actually works.

// We have created an object named 'str', which is created through the constructor object 'String'.
// So, we can say that the prototype property of the constructor function 'String()' is 'Object.prototype', and the prototype property of 'Object.prototype' is 'null'.
// However, the prototype property of 'str' will be 'String.prototype'.
// This means that each and every object is associated with other objects either directly or indirectly.

// Let's explore some other aspects...

// When we create a function using the 'function' keyword, the function will have a prototype property, which is 'Function.prototype'.
// This prototype property points to the function's prototype object, and the prototype property of 'Function.prototype' is 'Object.prototype'.

// Now that we have understood the concept of prototypes with functions, there is one more important thing...
// When we create a constructor function, a prototype object for that function is also created, like 'constructorFunction.prototype'.
// This constructor function's prototype object points to 'Object.prototype'. Initially, the constructor function's prototype object is empty, so it will look like '{}'.

// Example:

// function constFunction() {
//     // code
// }

// The constructor function has its prototype object:
// constFunction.prototype

// Now, let's create an object of it!

// let one = new constFunction();
// The line above creates an object using the 'constFunction()' class. This object will point to the prototype object of the 'constFunction()' class.

// Like:
// one.__proto__ === constFunction.prototype // true
// or
// constFunction.prototype === Object.getPrototypeOf(one); // true
