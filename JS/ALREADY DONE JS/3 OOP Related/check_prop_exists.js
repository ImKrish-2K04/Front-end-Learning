// in this tut, we are going to learn about how to check if a property exists in an object or not...

// there is three ways...

// 1) using 'typeof' keyword
// 2) using 'in' keyword
// 3) using 'hasOwnProperty()' method


let obj = {
    brand: "Samsung",
    model: "Galaxy",
    price: 150000
}

// type 1:
// the following will check and returns true if the property exists in the object else false...
console.log(typeof obj.brand !== "undefined");
console.log(typeof obj.rand !== "undefined");

// type 2:
console.log("-----");
console.log('price' in obj);
console.log('rice' in obj);

// type 3:
console.log("-----");
console.log(obj.hasOwnProperty('brand'));
console.log(obj.hasOwnProperty('rice'));