/* let arr = [12,45,78,56,84,55,21,33]

arr.filter((value)=>{

    if(value%2==0){
        console.log(value)
    }
})

console.log(arr) */   //in filter function there is no changes in main arr

let arr = [12,45,78,56,84,55,21,33]

let arr1 = arr.filter((value)=>{

    if(value%2==0){
        console.log(value)
        return value
    }
    
})
console.log(arr1)

console.log(arr)
