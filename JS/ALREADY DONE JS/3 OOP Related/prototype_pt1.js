// in this tutorial, we are going to learn about the 'prototype' object.

// in java script, when we are creating any object or a function, the object or function will have a property called 'prototype' or '__proto__' .

// the prototype is a parent of any object or a function. when we need to define a property or a method for an object or a function which will be used by every objects which inherits it then we can define it in the prototype, which will makes it available to all the objects which inherits it and not takes an extra space in code and not requires more space...

// let's have an example...

let Mobile = function(brand, model, price){
    // members of this class is called an instance members...
    this.brand = brand;
    this.model = model;
    this.price = price;

    // here we should have one method which will prints the details of the mobile...

    this.show = () => {
        console.log(`the brand is ${this.brand} and the model is ${this.model}.`);
        console.log(`the price is ${this.price}.`);
    }
}

let samsung = new Mobile('Samsung', 'Galaxy s24 Ultra', '1,45,999');
let iphone = new Mobile('Apple', '15 PRO MAX', '1,45,999')

samsung.show();

// here we want to add one more feature is 'color', but we have created object already and now we can't add that feature to object. so we have 2 ways, either we can define the color property for all objects of the 'Mobile' class or we can set the color property in the prototype of the 'Mobile' class so the childs of the Mobile class will be able to access that property and use it!...

// this can be done by using the syntax : 
// we requires a class name, 'prototype' keyword, and the property name..
// className.prototype.propertyName = value;

// let's see the first way...
// --------------------------
// samsung.color = "white";
// console.log(`the color of this device is ${samsung.color}.`);

// let's see the second way...
// ---------------------------
// members of the prototype object is called prototype members...

Mobile.prototype.color = "white";
console.log(`color of samsung device is ${samsung.color}.`);

// we can after change the value of the device as per our need..

iphone.color = "dark-orchid";
console.log(`color of iphone device is ${iphone.color}.`);

// here notice the one thing... we are using the 'prototype' as a keyword but in reality it is saying that we are pushing the color property to the parent object of the Mobile class is a 'prototype' object and therefore we can use it anywhere in the code when we are using it by its child objects...