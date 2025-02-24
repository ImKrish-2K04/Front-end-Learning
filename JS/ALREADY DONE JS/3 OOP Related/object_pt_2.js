// in this tut we are going to learn about how to create the objects in the javascript in the advanced way using an object constructor!

// syntax = " let obj = new Object(); "

// here 'Object()' is a constructor and 'Object' is a parent of each objects in the javascript.

// let's have an example of it!

let obj = new Object();

obj.name = "harry";
obj.age = 19;
obj.gender = "male";
obj.details = () => {
    console.log(`my name is ${obj.name}, i am ${obj.age} years old and i am ${obj.gender} by gender.`);
}

console.log(obj.name);
console.log(obj.age);
console.log(obj.gender);
obj.details();

// here we are going to learn about one more thing is how to delete a property or method of an object...
// this can be done by 'delete' keyword.

// let's have an example of it!

// delete obj.details;

obj.details();