// this file is just for experiments... an experimental file!



let Mobile = function (b, m, p) {
    let brand = b;
    let model = m;
    let price = p;

    this.show = function () {
        console.log(
            `The mobile is ${brand} ${model} and its price is ${price}.`,
        );
    };
};

let samsung = new Mobile("Samsung", "Galaxy s24 ultra", "1,45,999");

samsung.show();

samsung.color = "dark magenta";

console.log(`the color of this device is ${samsung.color}.`);



