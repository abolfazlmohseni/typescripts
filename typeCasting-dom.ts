const linkElem = document.quetySelector(".link") as HTMLAnchorElement
//const linkElem = <HTMLAnchorElement>document.quetySelector(".link") 

console.log(linkElem.href)

const inputElem = document.quetySelector("input") as HTMLInputElement
const inputElem = <HTMLInputElement>document.quetySelector("input") 

console.log(inputElem.placeholder)

const btn = document.quetySelector(".btn")
// const btn = document.quetySelector(".btn")!

// console.log(btn?.innerHTML)
console.log((btn as HTMLButtonElement).innerHTML)
