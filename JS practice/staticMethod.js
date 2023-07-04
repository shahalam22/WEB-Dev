//before ES6
// function Person(name){
//     this.name = name;
// }

// Person.prototype.getName = function(){
//     return this.name;
// };

// //this is a static method
// Person.createAnonymous = function (gender){
//     let name = gender == 'male' ? 'John Doe' : 'Jane Doe';
//     return new Person(name);
// }

// var anonymous = Person.createAnonymous();


//after ES6
class Person {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    static createAnonymous (gender){
        let name = gender == 'male' ? 'John Doe' : 'Jane Doe';
        return new Person(name);
    }
}

let anonymous = Person.createAnonymous('male');
console.log(anonymous.getName());


//we can't call static method using object name. it will give an error. so, we have to call static method using  class name always.
//we can make a call of static method inside the constructor of a class

//way 1 - "className.staticMethodName();"
//way 2 - "this.constructor.staticMethodName();"

//static method and properties is shared by all the instance of the class. To access static properties and method we have to call them after "className"

//static properties
class Item{
    constructor(name, quantity){
        this.name = name;
        this.quantity = quantity;
        this.constructor.count++;
    }
    static count = 0;
    static getCount(){
        return Item.count;
    }
}

console.log(Item.count);
console.log(Item.getCount());

let pen = new Item('Pen', 5);
let noteBook = new Item('Note Book', 2);

console.log(Item.getCount());