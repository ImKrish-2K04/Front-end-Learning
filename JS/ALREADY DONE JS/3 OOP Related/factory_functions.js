// a factory function is a function that returns an object.

let objFunc = () => {
    return {
        name: "harry",
        age: 19,
        gender: "male"
    }
}

let obj = objFunc();

console.log(obj.name);
console.log(obj.age);
console.log(obj.gender);