abstract class Person {

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


    // info() {
    //     console.log(`${this.name} ${this.lastname} created new persone`)
    // }
    abstract info(): string
}

class Student extends Person {
    lesson: string[]
    private static count: number = 0;
    constructor(name: string, lastname: string, phone: number, age: number, lesson: string[]) {
        super(name, lastname, phone, age)
        this.lesson = lesson
        Student.count++
    }

    info(): string {
        return `${this.name} ${this.lastname} created new Student`
    }

    public static getStudentCount() {
        return Student.count
    }

}

const studentone: Student = new Student("abolfazl", "mohseni", 9940564287, 17, ["algoritm", "riazi"])
const studentTwo: Student = new Student("danyal", "hseyni", 9940564387, 16, ["algoritm", "riazi"])
const studentTree: Student = new Student("amir", "jalali", 9940564487, 17, ["algoritm", "riazi"])


console.log(Student.getStudentCount);

// studentone.info()
console.log(studentTree.info());
