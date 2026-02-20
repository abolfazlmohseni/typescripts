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

class Student extends Person {
    lesson: string[]
    private static count: number = 0;
    constructor(name: string, lastname: string, phone: number, age: number, lesson: string[]) {
        super(name, lastname, phone, age)
        this.lesson = lesson
        Student.count++
    }

    public static getStudentCount() {
        return Student.count
    }
}

const studentone: Student = new Student("abolfazl", "mohseni", 9940564287, 17, ["algoritm", "riazi"])


console.log(Student.getStudentCount);
