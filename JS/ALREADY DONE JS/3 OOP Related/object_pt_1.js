// here we are going to learn about how to create the objects in the javascript in the basic way!

// first we are going to learn about how to create an object by an object literal.

// this can be done in two ways...

// first : we can first declare an object and then assign the key-value pairs to it...

// second : we can directly assign the object with a key-value pair...

// the main thing we have left is about understanding the objects..

// object is the collection of key-value pairs. inside an object a key value pair is same as the variable in the javascript. but it's called a property and if we are declaring any function inside the object then it's called a method.

// let's have an example of it!

// let's create an object by object literal.

let obj = {
    name: "harry",
    age: 19,
    gender: "male",
    // this is a method.
    greet: function() {
        console.log(`hello, my name is ${this.name} and my age is ${this.age}.`);
    }
}

// let's see how to access them!

console.log('the name of person is',obj.name + "\n");
obj.greet();

let obj2 = {};

obj2.name = "krishna"
obj2.age = 20;
obj2.gender = "male";
obj2.greet = () => {
    return `hello, my name is ${obj2.name}, my age is ${obj2.age} and i am ${obj2.gender} by gender.`;
}

console.log("\n" + obj2.greet());