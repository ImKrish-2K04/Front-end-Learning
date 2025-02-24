// let's understand the mixins here..
// mixins is also used to create a modularity in our code..
// in this there is just one differece, in composition we are creating first object components and then using those components we are creating a new objects inside another object and create a complete object using Object.create() method..
// where, in mixins we are creates object components first and then we adds them as a functionality to a particular object using Object.assign() method where the first parameter accepts an object to which the components of the other objects are assings and then the rest parameter is used for objects of which components are going to be assigned to the main object.. 
// like -> Object.assign(mainObj, ...objects)

// const Flying = {
//     fly : function() {
//         return 'i can fly'
//     }
// }

// const Eating = {
//     eat : function() {
//         return 'i can eat'
//     }
// }

// const Walking = {
//     walk : function() {
//         return 'i can walk'
//     }
// }

// const Talking = {
//     talk : function() {
//         return 'i can talk'
//     }
// }

// here first of all we have to create an empty object CUZ it is necessary...
// const Human = {} // an empty object which will going to be filled...

// Object.assign(Human, Eating, Walking, Talking) //fillings of the Human object...

// console.log(Human.eat()); 
// console.log(Human.walk()); 
// console.log(Human.talk()); // let's understand the mixins here..

// mixins is also used to create a modularity in our code..
// in this there is just one differece, in composition we are creating first object components and then using those components we are creating a new objects inside another object and create a complete object using Object.create() method..
// where, in mixins we are creates object components first and then we adds them as a functionality to a particular object using Object.assign() method where the first parameter accepts an object to which the components of the other objects are assings and then the rest parameter is used for objects of which components are going to be assigned to the main object.. 
// like -> Object.assign(mainObj, ...objects)

const Flying = {
    fly : function() {
        return 'i can fly'
    }
}

const Eating = {
    eat : function() {
        return 'i can eat'
    }
}

const Walking = {
    walk : function() {
        return 'i can walk'
    }
}

const Talking = {
    talk : function() {
        return 'i can talk'
    }
}

// here first of all we have to create an empty object CUZ it is necessary...
const Human = {} // an empty object which will going to be filled...

Object.assign(Human, Eating, Walking, Talking) //fillings of the Human object...

console.log(Human.eat()); 
console.log(Human.walk()); 
console.log(Human.talk()); 