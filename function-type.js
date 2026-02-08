"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum = (num1, num2) => {
    return num1 + num2;
};
// let testfunc; //any type
// let testfunc:Function; // any function type
let testfunc; //  function type
testfunc = sum; // function type
// testfunc = 20 // number type
console.log(sum(12, 10));
console.log(testfunc(10, 12));
