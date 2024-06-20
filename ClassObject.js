class RailwayForm{
    submit(){
        console.log(this.name + " your form is submitted train name is "+this.trainname +" train no is " + this.trainno)
    }
    cancel(){
        console.log(this.name + " your form is cancelled and trainnmae is "+this.trainname+" trainno "+this.trainno )
    }
    fill(name){
        this.name = name
    }
    train(trainname,trainno){

        this.trainname = trainname;
        this.trainno = trainno;

    }
}

let nikhilform = new RailwayForm()
nikhilform.fill("nikhil")
nikhilform.train("CHN-MUM",14568)
let sohanform = new RailwayForm()
sohanform.fill("sohan")
sohanform.train("DHL-PUN",45887)
nikhilform.submit()
sohanform.submit()
sohanform.cancel()
