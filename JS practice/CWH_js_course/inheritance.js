//CWH JS  #78  #81 - [static keyword]



//#78

// class animal {
//     constructor(name, color){
//         this.name = name
//         this.color = color
//     }
//     run(){
//         console.log(this.name + " is running!")
//     }
//     shout(){
//         console.log(this.name + " is shouting!")
//     }
// }

// class monkey extends animal{
//     eatBanana(){
//         console.log(this.name + " is eating banana.")
//     }
// }

// let a1 = new animal('Tommy', 'White')
// let m1 = new monkey('Chimpu', 'Orange')
// let m2 = new monkey('Chakka', 'Brown')

// // a1.run()
// m1.run()
// // m1.eatBanana()



//#81

//static methods/properties doesn't belong to any object it belongs to the class. So, we should access them using class name

class Item{
    constructor(name, quantity){
        this.name = name;
        this.quantity = quantity;
        this.constructor.count++;
    }
    static count = 0;       //static variable
    static getCount(){      //static method
        return Item.count;
    }
}
    
console.log(Item.count);
console.log(Item.getCount());
    
let pen = new Item('Pen', 5);
console.log(Item.count)
let noteBook = new Item('Note Book', 2);
    
console.log(Item.getCount());