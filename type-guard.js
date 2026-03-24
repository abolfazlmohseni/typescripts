"use strict";
// *1
Object.defineProperty(exports, "__esModule", { value: true });
const showProp = (member) => {
    if ('lastName' in member) {
        console.log(member.lastName);
    }
    else {
        console.log(member.startDate);
    }
};
const add = (param1, param2) => {
    if (typeof param1 === "string" && typeof param2 === "string") {
        return param1 + param2;
    }
    else if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
};
// *3
class Car {
    name;
    color;
    model;
    constructor(name, color, model) {
        this.name = name;
        this.color = color;
        this.model = model;
        this.name = name;
        this.color = color;
        this.model = model;
    }
    drive(speed) {
        console.log(`${this.name} drive ${speed} (Km/h)`);
    }
}
class Truck extends Car {
    name;
    color;
    model;
    constructor(name, color, model) {
        super(name, color, model);
        this.name = name;
        this.color = color;
        this.model = model;
    }
    load(weight) {
        console.log(`set ${weight}(kg) load on ${this.name}`);
    }
}
const useCar = (car) => {
    if (car instanceof Truck) {
        console.log(car.load(12000));
    }
    else if (car instanceof Car) {
        console.log(car.name);
    }
};
const FH = new Truck("FH6", "black", 2026);
const pars = new Car("parsElx", "black", 1400);
useCar(FH);
useCar(pars);
