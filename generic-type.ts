function echoStr(param: string): string {
    return param
}


function echoNum(param: number): number {
    return param
}


function echoAny(param: any): any {
    return param
}


function echo<T>(param: T): T {
    return param
}

const result = echo<number>(12)
const text = echo("test")



// function merge(obj1: object, obj2: object): object {
//     return Object.assign(obj1, obj2)
//     return { ...obj1, ...obj2 }
// }


function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    // return { ...obj1, ...obj2 }
    return Object.assign(obj1, obj2)

}
