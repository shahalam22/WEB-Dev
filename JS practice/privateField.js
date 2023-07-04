//to declare a private field we must start it with #
class Circle{
    #radius;
    static #count = 0;      //static private field
    constructor(value){
        this.#radius = value;
        Circle.#count++;
    }
    get area(){
        return Math.PI*Math.pow(this.#radius, 2);
    }
    set radius(value){
        if(typeof value === 'number' && value>0){
            this.#radius = value;
        } else {
            throw 'The radius must be a positive number.';
        }
    }
    get radius(){
        return this.#radius;
    }

    //'field in class' using this we can see weather a field is in that class or not
    static hasRadius(circle){
        return #radius in circle;
    }

    static get count(){
        return Circle.#count;
    }

}

let C1 = new Circle(4);
console.log(C1.radius);
console.log(C1.area);
C1.radius = 5;
console.log(C1.radius);
console.log(C1.area);
console.log(Circle.hasRadius(C1));
console.log(Circle.count);

// inheriting class with private fields
class Cylinder extends Circle{
    #height;
    constructor(radius, height){
        super(radius);
        this.#height = height;
    }
}



//PRIVATE METHOD - 1. Instance method, 2. Static method
class Person{
    #firstName;
    #lastName;
    constructor(firstName, lastName){
        this.#firstName = Person.#validate(firstName);      //static method must be access using className
        this.#lastName = Person.#validate(lastName);
    }

    getFullName(format = true){
        return format ? this.#firstLast() : this.#lastFirst();
    }

    //this is a private static method
    static #validate(name){
        if(typeof name === 'string'){
            let str = name.trim();
            if(str.length >= 3){
                return str;
            }
        }
        throw 'The name must be string and at least 3 characters';
    }
    
    //this is a private instance method
    #firstLast(){
        return `${this.#firstName} ${this.#lastName}`;
    }
    //this is a private instance method
    #lastFirst(){
        return `${this.#lastName} ${this.#firstName}`;
    }
}

let p1 = new Person('Shah', 'Alam');
console.log(p1.getFullName(false));