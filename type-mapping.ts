interface User {
    userName: string;
    email: string;
    age: number;
    addres: string;
}

type Opshtioal<T> = {
    [key in keyof T]?: T[key];
}

type ReadOnly<T> = {
    readonly [key in keyof T]: T[key];
}

const amir: User = { userName: "amir", addres: "neyshabor", email: "amir@gmail.com", age: 20 };
const abolfazl: Opshtioal<User> = { userName: "abolfazl", age: 17 };
const amin: ReadOnly<User> = { userName: "amir", addres: "neyshabor", email: "amir@gmail.com", age: 20 };
console.log(amin.userName);
// amin.userName = "amir"; //Error

/////////////////////////////

type Nullable<T> = {
    [key in keyof T]: T[key] | null;
}