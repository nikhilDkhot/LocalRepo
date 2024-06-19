/*const x ={
    user : "nikhil",
    role : "js developer",
    exp : 1,
    show : function(){
        console.log(`the name is ${this.user}\nthe role is ${this.role} `)
        
    }
}
x.show()
*/
/*
const x ={
    user : "nikhil",
    role : "js developer",
    exp : 1,
    show : function(){
      setTimeout(function() {
        console.log(this)
        console.log(`the name is ${this.user}\nthe role is ${this.role} `)

      }, 2000);  
    }
}
x.show()*/

/*const x ={
    user : "nikhil",
    role : "js developer",
    exp : 1,
    show : function(){
        console.log(this)

      setTimeout(function() {
        console.log(`the name is ${this.user}\nthe role is ${this.role} `)

      }, 2000);  
    }
}

x.show()*/

/*const x ={
    user : "nikhil",
    role : "js developer",
    exp : 1,
    show : function(){
        
        that = this
      setTimeout(function() {
        console.log(`the name is ${that.user}\nthe role is ${that.role} `)

      }, 2000);  
    }
}
x.show()*/

const x ={
    user : "nikhil",
    role : "js developer",
    exp : 1,
    show : function(){
        
        
      setTimeout(() => {
        console.log(`the name is ${this.user}\nthe role is ${this.role} `)

      }, 2000);  
    }
}
x.show()