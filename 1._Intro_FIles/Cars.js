class Car {

    specs = [];

    constructor (name) {
        this.name = name;
    }

    addSpecPrice(price) {
        this.specs.push(price);
    }
    addSpecMiles(miles) {
        this.specs.push(miles);
    }
    addSpecYear(year) {
        this.specs.push(year);
    }

}

const car = new Car();

car.addSpecPrice("100.000");
car.addSpecMiles("100.000");
car.addSpecYear("100.000");

console.log("This car is a " + name)


