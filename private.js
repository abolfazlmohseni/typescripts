"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Humen {
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
const abolfazl = new Humen("abolfazl", "mohseni", 9940564287, 17);
const mohamad = new Humen("mohamad", "hasani", 9965643245, 23);
console.log(abolfazl);
const testPerson = abolfazl;
console.log(testPerson);
// const testPerson: Humen = { name: "abolfazl", lastname: "mohseni", phone: 9940564287, age: 17 }
// console.log(testPerson);
const testPersons = [abolfazl, mohamad];
console.log(testPersons);
class ticher extends Person {
    //  private lesson: string[]
    //  public lesson: string[]
    lesson; //defult is public
    constructor(name, lastname, phone, age, lesson) {
        super(name, lastname, phone, age);
        this.lesson = lesson;
    }
}
const ticherone = new ticher("abolfazl", "mohseni", 9940564287, 17, ["algoritm", "riazi"]);
console.log(studentone);
