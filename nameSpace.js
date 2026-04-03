"use strict";
// let car = "pride"
// let car = "pars"
Object.defineProperty(exports, "__esModule", { value: true });
var iranKhodro;
(function (iranKhodro) {
    iranKhodro.car = "pars";
    class CreateCar {
        name;
        color;
        speed;
        constructor(name, color, speed) {
            this.name = name;
            this.color = color;
            this.speed = speed;
            name: this.name;
            color: this.color;
            speed: this.speed;
        }
        make() {
            console.log(`car by name:${this.name} and speed ${this.speed}km/h`);
        }
    }
    iranKhodro.CreateCar = CreateCar;
})(iranKhodro || (iranKhodro = {}));
var saipa;
(function (saipa) {
    saipa.car = "pride";
    class CreateCar {
        name;
        color;
        speed;
        constructor(name, color, speed) {
            this.name = name;
            this.color = color;
            this.speed = speed;
            name: this.name;
            color: this.color;
            speed: this.speed;
        }
        make() {
            console.log(`car by name:${this.name} and speed ${this.speed}km/h`);
        }
    }
    saipa.CreateCar = CreateCar;
})(saipa || (saipa = {}));
console.log(iranKhodro.car);
console.log(saipa.car);
/////////////////////////////////
const pars = new iranKhodro.CreateCar("pars", "black", 220);
pars.make();
const pride = new saipa.CreateCar("pride", "white", 180);
pride.make();
