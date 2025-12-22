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





