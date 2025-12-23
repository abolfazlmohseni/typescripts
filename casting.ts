let input: unknown = "this is a text";


let text = input; // type = unknown

let text2 = input as string; // type = string

let text = <string>input; // type = string

console.log((input as string).length)
