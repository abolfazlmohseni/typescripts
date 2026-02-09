"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum = (num1, num2) => {
    return num1 + num2;
};
const logger = (param) => {
    console.log(param);
};
const logger2 = (param) => {
    console.log(param);
    return undefined;
};
console.log(logger("abolfazl"));
console.log(logger2("abolfazl"));
