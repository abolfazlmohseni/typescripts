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
