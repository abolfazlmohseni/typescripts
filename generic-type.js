"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function echoStr(param) {
    return param;
}
function echoNum(param) {
    return param;
}
function echoAny(param) {
    return param;
}
function echo(param) {
    return param;
}
const result = echo(12);
const text = echo("test");
// function merge(obj1: object, obj2: object): object {
//     return Object.assign(obj1, obj2)
//     return { ...obj1, ...obj2 }
// }
function merge(obj1, obj2) {
    // return { ...obj1, ...obj2 }
    return Object.assign(obj1, obj2);
}
