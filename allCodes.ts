let num = 12 as const
let num2 = <Const> 12
// let = 13

const numbers = [34,43] as const

const user:{
  id:number,
  name:string
}={
  id:1,
  name:"abolfazl"
}

function sum (num1:number,num2:number):number{
  return num1 + num2
}

console.log(sum(...numbers))


const favorites = ["fronend","js"]


const users = [
  {
    id:1,
    name:"abolfazl",
    favorites
  }
]  as const;

users[0].favorites.push("typeScript")

console.log(users)

let actions = [
  {type:"ADD_TODO"},
  {type:"REMOVE_TODO"}
] as const

// for(const action of actions ){
//   if(action.type === "CREATE"){
//     console.log("Create")
//   }else{
//     console.log("Remove")
//   }
// }

let input: unknown = "this is a text";


let text = input; // type = unknown

let text2 = input as string; // type = string

let text = <string>input; // type = string

console.log((input as string).length)

enum Role {
  Admin,
  Ticher,
  User
}


// enum Role {
//   Admin =10,
//   Ticher,
//   User
// }


// enum Role {
//   Admin,
//   Ticher="Ticher",
//   User=2
// }

const user:{
  id:number,
  name:string,
  age:number,
  role:Role
}={
  id:1,
  name:"abolfazl",
  age:17,
  role:Role.Admin
}

if(user.role === Role.Admin){
  console.log("hello admin")
}else{
  console.log("not accses")
}

const sum = (num1:number, num2:number):number =>{
  return num1 + num2
}

// let testfunc; //any type

// let testfunc:Function; // any function type

let testfunc:(num1:number, num2:number)=> number; //  function type

testfunc = sum  // function type

// testfunc = 20 // number type


console.log(sum(12,10)) 
console.log(testfunc(10,12)) 

// function isLogin (username,password) {
  
//   if(username === "admin" && password === "admin"){
//     return true
//   } else{
//     return false
//   }

// }

// console.log(isLogin("admin",13235));
// console.log(isLogin("admin","admin"))

// function isLogin (username:string,password:string) {
  
//   if(username === "admin" && password === "admin"){
//     return true
//   } else{
//     return false
//   }

// }


// console.log(isLogin("admin",13235)); //error
// console.log(isLogin("admin","admin"))

// function isLogin (username:string,password:string):boolean {
  
//   if(username === "admin" && password === "admin"){
//     return true
//   } else{
//     return false
//   }

// }



// console.log(isLogin("admin",13235));
// console.log(isLogin("admin","admin"))


function isLogin (username: string | number,password: string | number ):boolean {
  if(typeof username === "string" && typeof password === "string"){
    if(username === "admin" && password === "admin"){
        return true
      } else{
        return false
      }
  }else if (typeof username === "number" && typeof password === "string"){
        if(username === "1234" && password === "admin"){
        return true
      } else{
        return false
      }
  }else if (typeof username === "number" && typeof password === "number"){
          if(username === "1234" && password === "1234"){
        return true
      } else{
        return false
      }
  }else if (typeof username === "string" && typeof password === "number"){
              if(username === "admin" && password === "1234"){
        return true
      } else{
        return false
      }
  }else{
    return false
  }
}

let user : {
  id:number,
  name:string,
  lastName:string,
  age:number,
  isAdmin:boolean
} = {
  id:1,
  name:"abolfazl",
  age:17,
  isAdmin:true
}

user.lastName = "mosheni"


console.log(user)

console.log(user.age)

const linkElem = document.quetySelector(".link") as HTMLAnchorElement
//const linkElem = <HTMLAnchorElement>document.quetySelector(".link") 

console.log(linkElem.href)

const inputElem = document.quetySelector("input") as HTMLInputElement
const inputElem = <HTMLInputElement>document.quetySelector("input") 

console.log(inputElem.placeholder)

const btn = document.quetySelector(".btn")
// const btn = document.quetySelector(".btn")!

// console.log(btn?.innerHTML)
console.log((btn as HTMLButtonElement).innerHTML)

let age = 10;
//age = "15";
age = 15;

let num : number = 10;
// num = "test";
num = 15;

let text : string = "my text"
// text = 65
text = "new my text"

let bol : boolean = false
bol = "true"
bol = true

let list: number[] = [10,12,154];

let list2 : string[]=["test1","test5","test4","test2"]

let list3: (number | string)[]=["test",12,56,345,"test2"]

let userAge: 18 | 19 | 20 = 18

// userAge = 34

userAge = 20

let anyVar:any = 15

console.log(typeof anyVar)

anyVar = "string"

console.log(typeof anyVar)

anyVar = false

console.log(typeof anyVar)

const sum = ( num1: number, num2: number ):number =>{
    return num1 + num2  
}

const logger = (param):void =>{
    console.log(param)
}

const logger2 = (param): undefined =>{
  console.log(param)
  return undefined
}

console.log(logger("abolfazl"))
console.log(logger2("abolfazl"))
