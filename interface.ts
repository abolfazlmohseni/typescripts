interface User {
    name: string
    lastName: string
    age?: number
    email: string

    isRegister?: () => boolean
}

interface User {
    city: string
}

interface Student extends User {
    score: number,
    lesson: string[]
}

const abolfazl: User = {
    name: "abolfazl",
    lastName: "mohseni",
    age: 17,
    email: "mohseni@gmail.com",
    city: "neyshabor",

    isRegister() {
        return false
    }
}

const studentOne: Student = {
    name: "abolfazl",
    lastName: "mohseni",
    email: "mohseni@gmail.com",
    city: "neyshabor",
    score: 98,
    lesson: ["math", "zaban"]
} 
