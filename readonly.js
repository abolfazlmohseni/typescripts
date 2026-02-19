"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    lastname;
    phone;
    age;
    constructor(name, lastname, phone, age) {
        this.name = name;
        this.lastname = lastname;
        this.phone = phone;
        this.age = age;
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
    lesson;
    constructor(name, lastname, phone, age, lesson) {
        super(name, lastname, phone, age);
        this.lesson = lesson;
    }
    setAge(newage) {
        this.age = newage;
    }
}
const studentone = new Student("abolfazl", "mohseni", 9940564287, 17, ["algoritm", "riazi"]);
studentone.setAge(18);
console.log(studentone);
