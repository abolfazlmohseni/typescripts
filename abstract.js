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
class Student extends Person {
    lesson;
    static count = 0;
    constructor(name, lastname, phone, age, lesson) {
        super(name, lastname, phone, age);
        this.lesson = lesson;
        Student.count++;
    }
    info() {
        return `${this.name} ${this.lastname} created new Student`;
    }
    static getStudentCount() {
        return Student.count;
    }
}
const studentone = new Student("abolfazl", "mohseni", 9940564287, 17, ["algoritm", "riazi"]);
const studentTwo = new Student("danyal", "hseyni", 9940564387, 16, ["algoritm", "riazi"]);
const studentTree = new Student("amir", "jalali", 9940564487, 17, ["algoritm", "riazi"]);
console.log(Student.getStudentCount);
// studentone.info()
console.log(studentTree.info());
