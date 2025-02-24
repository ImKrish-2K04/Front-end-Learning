// in this tut, we are going to see how we can achieve the prototype inheritance..

// to access the elements of one class into another class we can use call() method..

// to access the prototype object of one class by another class we can use inheritance..

// here we have achieved a simple class level inheritance using the object.call(this) method...

// here, we are using the Parent.call(this, x, y) trick, because of the parent class has 2 parameters which are used to initialize its properties and make the sum() method of its able to function properly...

// due to this, we have to just to make two parameters to the constructor function of the child constructor function and at the time of call() method we have to just pass it so we can access those assigned values also with the Parent class if the values are assigned to it before using its constructor creation...

function Parent(x, y) {
    this.x = x;
    this.y = y;
    this.sum = () => {
        return this.x + this.y;
    };
}

let objP = new Parent(10, 20);

function Child(x, y) {
    Parent.call(this, x, y);
    this.a = 10;
    this.b = 20;
    this.show = () => {
        return `a is : ${this.a} and b is : ${this.b}.`;
    };
}

let objC = new Child();

// console.log(objP.sum());
// console.log(objC.show());

// console.log(objP.x);
// console.log(objP.y);
// console.log(objP.sum());

// look here, when we creates any constructor function or any function, its prototype object is also created at that time.
// that prototype object can be accessed by the function using its property 'prototype' but there is some difference between constructor function and its object's access type..
// when we creates an object using that const. function then the object also has a property created which is '__proto__' which is points to the same object to which the constructor function points.. if you wanna check it then there is a way...

// console.log(Parent.prototype === objP.__proto__);
// OR
// console.log(Parent.prototype === Object.getPrototypeOf(objP));

// both the methods above are used to check whether the both are (object and class i.e const.function) points to the same prototype object or not!

// now let's understand about the prototype inheritance...

// when we need some common functionalities in two classes and they should be accessed by the child class then we have to create those functionalities into the prototype object of the parent class and we can inherits that parent prototype object for the child class and do it by linking the parent class's prototype object by the child class's prototype object...

// let's achieve it as below...

// suppose we have to classes clOne and clTwo then how it will be!? 

function clOne() {
    this.a = 10;
    this.b = 20;

    this.sum = () => {
        return `${this.a} + ${this.b}`;
    }
}

function clTwo() {
    this.getFactorial = function(num){
        let number = num;
        let temp = 1;

        while(number >= 1){
            temp = temp*number;
            number--;
        }

        return temp;
    }
}

// let's consider that both class should have one functionality of greeting user then we have it in the prototype object of the parent and link it with the prototype property of the child and this should be declared into the prototype object of the parent so both the child and parent have the different functionality in their coding section and the same functionalities in their prototype section...

clTwo.prototype = Object.create(clOne.prototype);
clTwo.prototype.constructor = clTwo;

let one = new clOne();
let two = new clTwo();

let factResult = two.getFactorial(5)

console.log(factResult);

// let's connect them both using the following technique...

clOne.prototype.greet = () => {
    console.log("Hello user, welcome here!");
}

two.greet();