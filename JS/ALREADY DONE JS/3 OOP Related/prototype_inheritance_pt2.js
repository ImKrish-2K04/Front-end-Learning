// let's learn one super and two sub classes...

function SuperClass() {
    let myName = SuperClass.name;

    this.show = function () {
        return `the myName variable is stored in ${myName} class.`;
    };
}

function SubClass1() {
    let myName1 = SubClass1.name;

    this.show = function () {
        return `the myName1 variable is stored in ${myName1} class.`;
    };
}

function SubClass2() {
    let myName2 = SubClass2.name;

    this.show = function () {
        return `the myName2 variable is stored in ${myName2} class.`;
    };
}

// NOTE : you should have to make inheritance before creating object of the classes...

function extend(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

extend(SubClass1, SuperClass);
extend(SubClass2, SuperClass);

let sup = new SuperClass();
let sub1 = new SubClass1();
let sub2 = new SubClass2();

// console.log(sup.show());
// console.log(sub1.show());
// console.log(sub2.show());

SuperClass.prototype.greet = function () {
    return `Hello world! i am inside prototype object. Welcome...`;
};

console.log(sub1.greet());
console.log(sub2.greet());