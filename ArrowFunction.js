let me = { 
    name: "nikhil khot", 
    thisInArrow:() => { 
    console.log("My name is " + this.name); // no 'this' binding here 
    }, 
    thisInRegular(){ 
    console.log("My name is " + this.name); // 'this' binding works here 
    } 
   };
   me.thisInArrow(); 
   me.thisInRegular();
console.log("----------------###########------------------")
const sayHello = () => console.log("hello") 

sayHello()

console.log("----------------###########------------------")

/*let add = (x, y) => console.log(x + y);
new add(2,3);*/

/*let add1 = function add3(x , y){
     console.log(x + y);
     }
new add1(2.55,8.00)*/

console.log("----------------###########------------------")

const sayHello1 = (name) => console.log("hello " + name) 

sayHello1("nikhil")

console.log("----------------###########------------------")

const sayHello2 = name => console.log("hello " + name) 

sayHello2("nikhil u have not put parathisis to aurg ")

console.log("----------------###########------------------")

const sayHello3 = (name,greeting) => console.log(greeting +" hello " + name) //if there are more then two aug use parathisis()

sayHello3("nikhil" ," here we have to aurg")



