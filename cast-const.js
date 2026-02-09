"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num = 12;
let num2 = 12;
// let = 13
const numbers = [34, 43];
const user = {
    id: 1,
    name: "abolfazl"
};
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(...numbers));
const favorites = ["fronend", "js"];
const users = [
    {
        id: 1,
        name: "abolfazl",
        favorites
    }
];
users[0].favorites.push("typeScript");
console.log(users);
let actions = [
    { type: "ADD_TODO" },
    { type: "REMOVE_TODO" }
];
// for(const action of actions ){
//   if(action.type === "CREATE"){
//     console.log("Create")
//   }else{
//     console.log("Remove")
//   }
// }
