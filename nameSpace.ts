// let car = "pride"
// let car = "pars"


namespace iranKhodro {
    export let car = "pars"

    export class CreateCar {
        constructor(
            public name: string,
            public color: string,
            public speed: number
        ) {
            name: this.name
            color: this.color
            speed: this.speed
        }
        make() {
            console.log(`car by name:${this.name} and speed ${this.speed}km/h`)
        }
    }
}

namespace saipa {
    export let car = "pride"

    export class CreateCar {
        constructor(
            public name: string,
            public color: string,
            public speed: number
        ) {
            name: this.name
            color: this.color
            speed: this.speed
        }
        make() {
            console.log(`car by name:${this.name} and speed ${this.speed}km/h`)
        }
    }
}

console.log(iranKhodro.car);
console.log(saipa.car);

/////////////////////////////////

const pars = new iranKhodro.CreateCar("pars", "black", 220)
pars.make()

const pride = new saipa.CreateCar("pride", "white", 180)
pride.make()