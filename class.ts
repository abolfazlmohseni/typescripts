class Person {

    name: string
    lastname: string
    phone: number
    age: number

    constructor(name: string, lastname: string, phone: number, age: number) {
        this.name = name
        this.lastname = lastname
        this.phone = phone
        this.age = age
    }
}

const abolfazl = new Person("abolfazl", "mohseni", 9940564287, 17)

console.log(abolfazl);
