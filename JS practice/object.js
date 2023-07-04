//empty object
let empty = {};

//person object - it has two property 1. firstName 2. lastName
let person = {
    firstName : 'John',
    lastName : 'Doe'
};

//accessing properties
//1. Dot notation - object.property
console.log(person.firstName);

//2. Array Notation - object['property']
console.log(person['firstName']);

let address = {
    //if property name contains space this should write in ' '.
    'Building No' : 3960,
    Street : 'North 1st street',
    State : 'California',
    Country : 'USA'
};

console.log(address["Building No"]) //we always use array notation for this types of property, If we use dot notation it will give error.
//if we want to access property which has not declared it will show undefined
console.log(address.district);

//Modify the value of a property

address["Building No"] = 3578;

console.log(address["Building No"]);

//Adding new property in the object

person.age = 25;

console.log(person);

//Deleting a property of an object

delete person.age;

console.log(person);

//Checking if a property exists

console.log('firstName' in person);
console.log('age' in person);
