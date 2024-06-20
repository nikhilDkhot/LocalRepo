/* let arr = [8,5,7,2,6]

let arr1=arr.reduce((a1,a2)=>{
   return a1+a2
    
})

console.log(arr1)
console.log(arr) */

let arr = [8,5,7,2,6]

const reduce_func = (a1,a2) => {
    return a1 + a2 
}

let arr1 = arr.reduce(reduce_func)

console.log(arr1)                    //reduce reture value we as filter ans map return arr
/* 
let arr = [8,5,7,2,6]

const reduce_func = (a1,a2) => {
    return a1 * a2
}

let arr1 = arr.reduce(reduce_func)

console.log(arr1) */

/* let arr = [8,5,7,2,6]

const reduce_func = (a1,a2) => {
    return a1 - a2
}

let arr1 = arr.reduce(reduce_func)

console.log(arr1) */