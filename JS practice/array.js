//js array has two mega properties
//1. Arrays can hold values of mixed type.
//2. Size of the array is dynamic

// way 1 - declared null array
let scores = new Array();
let emptyArray = [];

// way 2 - declared with size
let scores2 = Array(10);

//way 3 - declared with values
let scores3 = new Array(9, 10, 8, 7, 6);

//way 4 - declared with one element
let signs = new Array('red');

//way 5 
let colors = ['red', 'blue', 'yellow', 'green'];

//accessing elements of array
console.log(colors[0]);
console.log(colors[1]);

//changing value of an element
console.log(colors);
colors[2] = 'violate';
console.log(colors);

//getting the array size
console.log(colors.length);

/*---BASIC OPERATION ON ARRAY---*/

//adding an element to the end of the array
colors.push('black');
console.log(colors);

//adding an element to the begining of an array
colors.unshift('white');
console.log(colors);

//removing an element from the end of an array
colors.pop();
console.log(colors);

//removing an element from the begining of an array
colors.shift();
console.log(colors);

//finding index of an element in the array
console.log(colors.indexOf('green'));
//it returns -1 if value is not present
console.log(colors.indexOf('black'));

//check if a value is an array
console.log(Array.isArray(colors));

//delete method
delete colors[2];
console.log(colors);

//concat method
let colors2 = ['white', 'black'];
let colors3 = ['orange', 'violate'];

let concatedArray = colors.concat(colors2, colors3);
console.log(concatedArray);     //this doesn't change the arrays. but returns a new concatenated array

//sort method
let num = [5,6,2,4,8];
num.sort();
console.log(num);

//splice method
num.splice(2,1,23,24);  //'2'no position theke '1' ta element remove korbe & '23 & 24' ke insert korbe
console.log(num);

//slice method
console.log(num.slice(3));
console.log(num.slice(2,4));

//reverse method
num.reverse();
console.log(num);