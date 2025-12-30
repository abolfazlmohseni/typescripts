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
