//CWH JS  #79 - [override]  #80 - [overriding with constructor]


class employee{
    constructor(name){
        console.log(`Employee constructor executing with name ${name}`)
        this.name = name
    }

    login(){
        console.log(`Employee has logged in.`)
    }

    logout(){
        console.log(`Employee has logged out.`)
    }

    requestLeave(leaves){
        console.log(`Employee has requested ${leaves} leaves.`)
    }
}

class programmer extends employee{
    constructor(name){
        super(name)
        console.log('This is a programmer\'s constructor')
    }
    
    requestCoffee(){
        console.log(`Employee requested for a coffee.`)
    }

    requestLeave(leaves){       //it is an overridden method
        super.requestLeave(leaves)
        console.log(`Extra one day leave granted.`)
    }
}

let e1 = new employee('Sabbir')
let e2 = new programmer('Abir')

// e1.login()
// e1.requestLeave(4)

// e2.login()
// e2.requestCoffee()
// e2.requestLeave(4)