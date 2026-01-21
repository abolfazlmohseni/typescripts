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

// const abolfazl = new Person("abolfazl", "mohseni", 9940564287, 17)
// const mohamad = new Person("mohamad","hasani",9965643245,23)
// console.log(abolfazl);


// const testPerson :Person = abolfazl
// console.log(testPerson);

// const testPerson: Person = { name: "abolfazl", lastname: "mohseni", phone: 9940564287, age: 17 }
// console.log(testPerson);

// const testPersons:Person[] = [abolfazl,mohamad]
// console.log(testPersons);


class Student extends Person {
    lesson: string[]

    constructor(name: string, lastname: string, phone: number, age: number, lesson: string[]) {
        super(name, lastname, phone, age)
        this.lesson = lesson
    }
}

const studentone: Student = new Student("abolfazl", "mohseni", 9940564287, 17, ["algoritm", "riazi"])


console.log(studentone);
