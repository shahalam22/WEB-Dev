
let messege = "Hello", counter = 40;

console.log(messege);
console.log(counter);

messege = 100;
console.log(messege);


//JavaScript is a dynamically typed language. It means that a variable doesn’t associate with a type. In other words, a variable can hold a value of different types. 

let demo = 120;
console.log(typeof(demo));

demo = false;
console.log(typeof(demo));

demo = "Hi";
console.log(typeof(demo));

//The undefined type is a primitive type that has only one value undefined. By default, when a variable is declared but not initialized, it is assigned the value of undefined.

let demo2;
console.log(demo2);
console.log(typeof(demo2));

console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity

//NaN stands for Not a Number. It is a special numeric value that indicates an invalid number.
console.log('a'/2); // NaN;

//string concatination
let str = 'JavaScript';
str = str + ' String';
console.log(str);

//big integer example
let pageView = 9007199254740991n;
console.log(typeof(pageView)); // 'bigint'

//object type data in javascript
let contact = {
    firstName : "Shah Alam",
    lastName : "Abir",
    email : "shahalamabir21@gmail.com",
    phone : '01869230211',
    address : {
        building : '4000', 
        street : "secretary lane",
        city : 'Narayanganj',
        state : 'Dhaka',
        country : 'BamglaDesh'
    }
}
//we can access the properties by 2 way
console.log(contact.firstName);
console.log(contact['email']);

console.log(contact);

//different numbers from different base
let num = 123;  //decimal
console.log(num);

//octal - in console they shows decimal value
num = 057;
console.log(num);

num = 0o57; //o after 0 forces to write number 0-7
console.log(num);

//hexadecimal - in console they shoes decimal value
num = 0xad15;
console.log(num);

//binary 
console.log("Binary Data\n");
num = parseInt('111', 2);
console.log(num);

console.log("another way to call binary - ");
num = 0b111;
console.log(num);

//integer with power value
num = 3.14e7;
console.log(num);

//integer with negative power value
num = 3.14e-4;
console.log(num);

//numeric separator
console.log("\nNumeric Separator\n");
num = 1_000_000_000;    //used this instead of 1000000000 for making it more readable
console.log(num);       //this will simply print 1000000000

