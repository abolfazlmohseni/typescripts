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
