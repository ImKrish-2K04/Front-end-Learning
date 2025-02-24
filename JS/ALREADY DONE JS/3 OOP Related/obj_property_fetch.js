// in this video, we can see how to fetch a property from an object also its values...

let obj = {
    name : "harry",
    age : 20,
    gender : "male",
    disp : () => {
        console.log(`my name is ${obj.name} and my age is ${obj.age}.`);
    }
}

// let's retrieve its properties using for...in loop...

// obj.disp()

// for (let value in obj){
//     if(typeof obj[value] !== "function"){
//         console.log(value);
//     }
// }

console.log(Object.keys(obj).join().replaceAll(",", " "));

console.log(Object.values(obj).join().replaceAll(",", " "));