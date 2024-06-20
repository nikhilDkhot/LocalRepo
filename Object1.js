const User = {}

User.id ="NK778"
User.name ="Nick"
User.isLoggedIn = false

//console.log(User)

const regularUser = {
    email : "xyz@gmail.com",
    fullname : {
        userFullname : {
            firstname : "david",
            lastname : "goggins"
        }
    }
}

//console.log(regularUser)
//console.log(regularUser.fullname)
//console.log(regularUser.fullname.userFullname)
//console.log(regularUser.fullname.userFullname.firstname)

const obj1 = {1:"a", 2 : "b"}
const obj2 = {3:"a", 4 : "b"}
const obj4 = {5:"a", 6 : "b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign(obj1,obj2)
//const obj3 = Object.assign({},obj1,obj2) //recommended as first arg is target and all object gona merge in that
const obj3 = {...obj1,...obj2,...obj4}
//console.log(obj3)

const student = [
    {
        id: 1,
        name: "A"
    },
    {
        id : 2,
        name : "B"
    },
    {
        id : 3,
        name : "C"
    }
]
console.log(student[0])
console.log(student[2].id)

console.log(Object.keys(User))
console.log(Object.values(User))
console.log(Object.entries(User))

console.log(User.hasOwnProperty('name'))
console.log(User.hasOwnProperty('password'))




