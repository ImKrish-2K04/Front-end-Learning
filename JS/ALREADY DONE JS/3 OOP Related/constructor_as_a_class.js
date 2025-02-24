// in this tut, we are going to learn about constructor as a class...

// here we simply creates a constructor function which will be used to create objects...

let Mobile = function(brand, model, price, color){
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;

    this.show = function(){
        console.log(`the brand is ${this.brand} and the model is ${this.model}.`);
        console.log(`the color of the mobile is ${this.color} and the price is ${this.price}.`);
    }
}

let samsung = new Mobile('Apple', '15 PRO MAX', '1,45,999', 'dark-purple matte');

samsung.show();