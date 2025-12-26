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
