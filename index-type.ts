//index Types
// interface Errors {
//     name: string;
//     email: string;
//     password: string
// }
interface Errors {
    [prop: string]: string
}
const loginErrors: Errors = {
    name: "نام معتب نیست",
    email: "ایمیل معتب نیست",
    password: "گذرواژه معتب نیست"
}

const registerErrors: Errors = {
    name: "نام معتب نیست",
    email: "ایمیل معتب نیست",
    password: "گذرواژه معتب نیست",
    age: "سن معتبر نیست",
    addres: "ادرس معتبر نیست"
}