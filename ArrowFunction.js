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