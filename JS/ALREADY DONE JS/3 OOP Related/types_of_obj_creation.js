// there are multiple ways to create an object in javascript...

// let's see each and every way...

// 1) using object literal...

// let obj = {}
// obj.name = "harry";
// obj.age = 20;

// 2) using object literal... 'complete'

// let obj = {
//     name : null,
//     age : null
// }

// obj.name = "harry";
// obj.age = 20;

// 3) using object constructor...

// let obj = new Object();
// obj.name = "harry";
// obj.age = 20;

// 4) using factory function...

// function factoryFun(){
//     return {
//         name : 'harry',
//         age : 20
//     }
// }

// let obj = factoryFun();

// 5) using constructor method...

// let object = function(){
//     this.name = "harry";
//     this.age = 20;
// }

// let obj = new object();

// console.log(obj.name);