//in previous we saw the raw code for class & constructor. from this we will implement actual keywords

//creating class

//in java style

// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     //getter
//     getname(){
//         return this.name;
//     }
//     //setter
//     setName(newName){
//         newName = newName.trim();
//         if(newName === ''){
//             throw 'The name cannot be empty.';
//         }
//         this.name = newName;
//     }
// }

// let p2 = new Person("Shah Alam");
// console.log(p2.getname());
// p2.setName('Hasin Pagla');
// console.log(p2.getname());

//in javascript
class Person{
    constructor(name){
        this.name = name;
    }
    //getter - we use _name instead of name to prevent name conflict with the function [getter, setter] name 
    get name(){
        return this._name;
    }   
    //setter
    set name(newName){
        newName = newName.trim();
        if(newName === ''){
            throw 'The name cannot be empty.';
        }
        this._name = newName;
    }
}

//first of all js sees the access to 'name' property of the 'person' class, it checks if the 'person' class has any 'name' property.
//if not, js checks if the 'person' class has any method that binds to the 'name' property. In this example , the 'name()' method binds to the 'name' property via the 'get' keyword.
//Once js finds getter method, it executes the getter method and returns a value [name]. Then, the setter uses the 'set' keyword followed by the 'name' method. It sets 'name' value to this property.
//if we don't use getter [by get] we won't get value stick to 'name' property. If we don't use setter [by set] we won't set value to 'name' property though we write statements to execute setter and getter.

let p1 = new Person("Shah");
console.log(p1.name);       //getting name using getter
p1.name = 'Hasin Ahmed';    //setting name using setter 
console.log(p1.name);       //getting name using getter

let p2 = 'sabbir'

//X instanceOf Y - it returns true if a object[X] is made of the class[Y]
console.log(p1 instanceof Person);
console.log(p2 instanceof Person)

//special example
let meeting = {
    attendees:[],
        add(attendee){
            console.log(`${attendee} joined the meeting.`);
            this.attendees.push(attendee);
            return this;
        },

        get latest(){
            let count = this.attendees.length;
            return count == 0 ? undefined : this.attendees[count-1];
        }
};

meeting.add('Abir').add('Hasin').add('Shuvo').add('Sazid');
console.log(`The latest attendee is ${meeting.latest}.`);