class std{
    constructor(name,mark){
        this.name = name;
        this.mark = mark;
    }
}
const std1 = new std("david","75%");
console.log(std1);
console.log(std1.name);

/* const std2 = new std("goggin","85%");
console.log(std2);
console.log(std2.name); */
const std2 = new std("goggin","85%");
console.log(std2.name+" : "+std2.mark);


