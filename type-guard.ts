// *1

type teacher = {
    name: string,
    startDate: Date
}

type admin = {
    name: string
    lastName: string
}

const showProp = (member: admin | teacher) => {

    if ('lastName' in member) {
        console.log(member.lastName);
    } else {
        console.log(member.startDate);
    }
}

// *2


type combine = string | number

const add = (param1: combine, param2: combine) => {
    if (typeof param1 === "string" && typeof param2 === "string") {
        return param1 + param2
    } else if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2
    }
}

// *3

class Car {
    constructor(public name: string, public color: string, public model: number) {
        this.name = name
        this.color = color
        this.model = model
    }
    drive(speed: number) {
        console.log(`${this.name} drive ${speed} (Km/h)`)
    }
}

class Truck extends Car {
    constructor(public name: string, public color: string, public model: number) {
        super(name, color, model)
    }

    load(weight: number) {
        console.log(`set ${weight}(kg) load on ${this.name}`);

    }
}

const useCar = (car: Car | Truck) => {

    if (car instanceof Truck) {
        console.log(car.load(12000));
    } else if (car instanceof Car) {
        console.log(car.name)
    }
}


const FH = new Truck("FH6", "black", 2026)
const pars = new Car("parsElx", "black", 1400)

useCar(FH)
useCar(pars)