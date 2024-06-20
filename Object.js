const mySym = Symbol("key1")

const JsUser = {
    name : "Nikhil",
    "Full name" : "Nikhil Khot",
    //mySym : "mykey1",
    [mySym] : "mykey1",
    age : 25,
    location : "Sangli",
    email : "nikhil@gmail.com",
    isLoggedIn : false,
    lasLoginDays:["monday","friday"]
}

//console.log(JsUser.email)
//console.log(JsUser[email]) wrong syntax
//console.log(JsUser["email"])
//console.log(JsUser[age])
//console.log(JsUser["age"])
//console.log(JsUser."Full name")
//console.log(JsUser["Full name"])
//console.log(JsUser[mySym])

JsUser.email = "nikhil258@gmail.com"
//console.log(JsUser["email"])
//Object.freeze(JsUser)              //now we cannot make changes in object 
JsUser.email = "nikhil25888@gmail.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello user welcome")
}

JsUser.greeting1 = function(){
    console.log("hello user "+this.name +" welcome")
}

//console.log(JsUser.greeting)  //[Function (anonymous)]
console.log(JsUser.greeting())  /*hello user welcome
                                undefined*/
console.log(JsUser.greeting1())  /*hello user Nikhil welcome
                                undefined*/ 




