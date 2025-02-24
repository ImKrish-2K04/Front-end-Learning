// constructor can be created as the same way as object...

function Mobile() {
    this.brand;
    this.model;
    this.price;
    this.color;
    this.showDetail = () => {
        return `the mobile is ${this.brand} ${this.model} and its price is ${this.price} and its color is ${this.color}.`;
    };
}

let samsung = new Mobile();

samsung.brand = "samsung";
samsung.model = "galaxy";
samsung.price = "150000";
samsung.color = "black";
console.log(samsung.showDetail());