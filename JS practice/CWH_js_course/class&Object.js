//CWH JS  #76  #77  
//CLASS, OBJECT, CONSTRUCTOR

class railwayForm {
    constructor(name, train){
        console.log("Constructor called with name: "+name+" train no: "+train)
        this.name = name
        this.train = train
    }
    submit(){
        alert(this.name + "'s Form submitted for train " + this.train)
    }
    cancel(){
        alert(this.name + "'s Form cancelled for train " + this.train)
    }
    // fill(name, train){
    //     this.name = name
    //     this.train = train
    // }
}

let abirForm = new railwayForm('Abir', 12458)
// abirForm.fill('Abir', 12458)

// let hasinForm = new railwayForm('Hasin', 65258)
// hasinForm.fill('Hasin', 65258)

abirForm.submit()
// hasinForm.submit()
// abirForm.cancel()
// hasinForm.cancel()