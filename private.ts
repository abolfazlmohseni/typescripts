class Humen {

    public name: string
    private lastname: string
    readonly phone: number
    age: number

    constructor(name: string, lastname: string, phone: number, age: number) {
        this.name = name
        this.lastname = lastname
        this.phone = phone
        this.age = age
    }
}

const abolfazl = new Humen("abolfazl", "mohseni", 9940564287, 17)
const mohamad = new Humen("mohamad", "hasani", 9965643245, 23)
console.log(abolfazl);


const testPerson: Humen = abolfazl
console.log(testPerson);

// const testPerson: Humen = { name: "abolfazl", lastname: "mohseni", phone: 9940564287, age: 17 }
// console.log(testPerson);

const testPersons: Humen[] = [abolfazl, mohamad]
console.log(testPersons);


class ticher extends Person {
    //  private lesson: string[]
    //  public lesson: string[]
    lesson: string[] //defult is public

    constructor(name: string, lastname: string, phone: number, age: number, lesson: string[]) {
        super(name, lastname, phone, age)
        this.lesson = lesson
    }
}

const ticherone: ticher = new ticher("abolfazl", "mohseni", 9940564287, 17, ["algoritm", "riazi"])


console.log(studentone);
