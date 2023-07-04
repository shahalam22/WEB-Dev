//onject methods

//way 1 to declare method of function
let person ={
    firstName: 'John',
    lastName: 'Doe'
};

function greet(){
    console.log("Hello!!");
}

person.greet = greet;

person.greet();

//shorthand notation to do that - we will use this 
let person2 = {
    firstName: 'Shah',
    lastName: 'Alam',
    greet: function(){
        console.log("Assalamu-Alaikum");
    },
    //use of this keyword
    getFullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

person2.greet();
console.log(person2.getFullName());

//constructor function for creating object - first letter of name must be capital letter [convention]
function Person3(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function(){
        return this.firstName+" "+this.lastName;
    };
}

let p1 = new Person3('shah', 'alam');
let p2 = new Person3('hasin', 'ahmed');

console.log(p2.getFullName());

//we can't make a object using constructor without new reference [which we can achieve by "new" keyword]. So, new keyword must be included else do this
/*
function Person(firstName, lastName) {
    if (!new.target) {
        return new Person(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;
}

let person = Person("John", "Doe");

console.log(person.firstName);
*/