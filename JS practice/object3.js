let Person = class {
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

let person = new Person('Abir');
console.log(person.getName());

//js classes are first class citizens. so we can pass a class into a function, return it from a function and assign it to a variable
function factory(aClass){
    return new aClass;
}

let greeting = factory(class{
    sayHI(){
        console.log('Hi');
    }
});

greeting.sayHI();

//SINGLETON CLASS
let app = new class{
    constructor(name){
        this.name = name;
    }
    start(){
        console.log(`We're starting the ${this.name}.`);
    }
}('Awesome app...');

app.start();


//ES6 allows to use an expression in brackets []. It'll then use the result of the expression as the property name of an object.
//exercise 1
let propName = 'c';
const rank = {
    a: 1,
    b: 2,
    [propName]: 3,
};

console.log(rank.c);

//exercise 2
let name = 'fullName';
class Person1{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get [name](){
        return `${this.firstName} ${this.lastName}`;
    }
}

let p1 = new Person1('Shah', 'Alam');
console.log(p1.fullName);