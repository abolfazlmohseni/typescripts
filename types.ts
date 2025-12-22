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
