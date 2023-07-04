//before ES6 we used "Prototypal Inheritance"
// function Animal(legs){
//     this.legs = legs;
// }

// Animal.prototype.walk = function(){
//     console.log('Walking on '+this.legs+' legs');
// }

// function Bird(legs){
//     Animal.call(this, legs);
// }

// Bird.prototype = Object.create(Animal.prototype);
// Bird.prototype.constructor = Animal;

// Bird.prototype.fly = function(){
//     console.log('flying...');
// }

// var pigeon = new Bird(2);
// pigeon.walk();
// pigeon.fly();

//modern way to do this
class Animal{
    constructor(legs){
        this.legs = legs;
    }
    walk(){
        console.log('Walking on '+this.legs+' legs.');
    }
    //besides all the methods and properties... subclass inherits all the static methods and properties from the parent class. we can access them as we access these from parent class [we can do "childclass.method()" in replace of "parentclass.method()"].
    static helloWorld(){
        console.log('Hello World!');
    }
}

class Bird extends Animal{
    constructor(legs, color){
        super(legs);
        this.color = color;     //we can't work with this keyword before super. super is the first thing we should do in constructor.
    }
    fly(){
        console.log('flying...');
    }
}

let B1 = new Bird(2, 'Green');
B1.walk();
B1.fly();
console.log(B1.color);

//Shadowing - [method overriding]
class Dog extends Animal{
    constructor(legs){
        super(legs);
    }
    walk(){
        super.walk();       //we can use this if we want to also include parent class's method along with this shadowing method
        console.log(`Dog is walking.`);
    }
}

let bingo = new Dog(4);
bingo.walk();


Animal.helloWorld();
Bird.helloWorld();
Dog.helloWorld();


//inheriting from existing Built-in types [queue from array]
class Queue extends Array{
    enqueue(e){
        super.push(e);
    }
    dequeue(){
        return super.shift();
    }
    peek(){
        return !this.empty() ? this[0] : undefined;
    }
    empty(){
        return this.length === 0;
    }
}

let customers = new Queue();
customers.enqueue('a');
customers.enqueue('b');
customers.enqueue('c');

while(!customers.empty()){
    console.log(customers.dequeue());
}