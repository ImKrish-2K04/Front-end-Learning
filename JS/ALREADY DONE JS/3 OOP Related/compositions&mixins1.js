// here we are going to learn about composition and mixins..
// somewhere it is considered as the same thing but that is not a complete truth because both are working in different manners...
// composition is used to combine simpler or object modules and creates a new big and complex object which allows us the modularity and reusability of the smaller components in an object which helps more than inheritance because of its nature of taking only those components which are needed...
// mixins is used to also combine multiple objects but in different way like prototype chaining.. it is also takes only those components which are needed by the particular object..

// let's see them with two different examples...

// COMPOSITION...

const Engine = {
    start : function() {
        return 'engine started...'
    },

    end : function() {
        return 'engine stopped...'
    }
}

const Wheel = {
    rotate : function() {
        return 'wheels rotating...'
    }
}

const car = {
    engine : Object.create(Engine),
    wheels : Object.create(Wheel),

    drive : function() {
        console.log(this.engine.start());
        console.log(this.wheels.rotate());
    },

    stop : function() {
        console.log(this.engine.end());
        console.log('car stopped!');
    }
}

car.drive();
console.log('\n');
car.stop();

// here in the example above we can see the best composition example which is shown by the 'car' object...
// here we have created two objects 'engine' and 'wheel' which have some functionalities like starting of engine, stopping of engine and rotation of the wheels.
// now we have one more object 'car' is the main object here to understand..

// in composition we have to combine the multiple components or modules or we can say objects, so we can create a complete and a complex object without any problem.. here we have first of all created two objects and after it we have one new object named 'car' with which we have to combine those objects..

// that thing we can do using Object.create() method, which creates a new object using the simple object or prototype object passing to it and returns it to which we have to store in some variable or property in object...

// after all with those two object, we have created two functionalities in car object is 'drive' and 'stop'.. drive calls the 'engine start' method and 'wheels rotating' method of the particular objects which is now its part and is called using 'this' keyword so it is refers to the current object which is used to call it... 

// now we have seen composition completely so we can move towards the mixins and see how it is working and the difference between it and composition.. this will be seen in the next part of the file... compo-n-mixins-2.js