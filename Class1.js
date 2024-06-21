// Expression; the class is anonymous but assigned to a variable
/* const circle = class {
    constructor(radius){
        this.radius = radius;
    }
} */

//let c1 = new circle(4)
//console.log(c1.radius)

// Expression; the class has its own name
/* const circle = class circle2{
    constructor(radius){
        this.radius = radius;
    }
}

let c1 = new circle(5)
console.log(c1.radius) */

const circle = class circle2{
    constructor(radius){
        this.radius = radius;
    }
    //SyntaxError: A class may only have one constructor
   /*  constructor(radius,PI){
        this.radius = radius
        this.PI = PI
    } */
}

let c1 = new circle(5)
//let c2 = new circle(6,3.14)
console.log(c1.radius)



