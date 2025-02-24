// in this tut we are going to learn about how to create a constructor with parameters and how to create an object using the constructor.

function Mobile(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.showDetail = () => {
        return `the mobile is ${this.brand} ${this.model} and its price is ${this.price}.`;
    };
}

let samsung = new Mobile("samsung", "galaxy", 150000);
console.log(samsung.showDetail());