//lecture 7 was a random discussion


// /*basic Function*/
// //function repeats code. Function gives us control, but loop doesn't.
// //there are two steps of function - 1. define a function, 2. invoke a function

// /*structure of function
// 1.
//     function name_of_the_function( parameter ){
//         body of the function...
//         ....
//         ....
//         ....
//         return value
//     }
// */

// //  example of structure 1
// function testFunction(a, b){
//     console.log(a+b);
// }

// testFunction(5,6);

// //  sleep function
// function sleep(name){
//     console.log(`${name} is sleeping`);
// }

// //  awake function
// function awake(name){
//     console.log(`${name} is awake`);
// }

// //  eat function
// function eat(name, time){
//     console.log(`${name} is taking ${time}`);
// }

// //  walk function
// function walk(name, destination){
//     console.log(`${name} is walking to ${destination}`);
// }

// //  study function
// function study(name){
//     console.log(`${name} is studying`);
// }

// //  work function
// function work(name){
//     console.log(`${name} is working`);
// }

// /*Composition of previously declared functions*/
// //for job-holders
// function jobHolderLifecycle(name){
//     awake(name);
//     eat(name, 'breakfast');
//     walk(name, 'office');
//     work(name);
//     eat(name, 'launch');
//     walk(name, 'home');
//     eat(name, 'dinner');
//     sleep(name);
// }

// jobHolderLifecycle('Abir');
// console.log('-------------');

// //for students
// function studentsLifecycle(name){
//     awake(name);
//     eat(name, 'breakfast');
//     study(name);
//     eat(name, 'launch');
//     study(name);
//     eat(name, 'dinner');
//     sleep(name);
// }

// studentsLifecycle('Shah Alom')


/*when use return*/

// //function composition - f(g(x))
// // when return in function - jokhon ekta function er result amra arekta function er input hishebe nibo mane composite function thakbe tokhon inner function er khetre value return kora lagbe

// function sum(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }

// function times(a,b){
//     return a*b;
// }

// const result = times(sum(20,10), sub(20,10));
// console.log(result);


/*  Power of function as a first class citizen  */

//function is a first class citizen in js - when we can use function as a value. we can pass function into another function, store function into array or object, can store function into variable
//where funtion is a first class citizen, there we can do functional programming. Functional programming is mutable

function testFunction(){
    console.log(`I am a test function`);
}

// const fn = testFunction();       //if we put () here then this variable will store the return value of the function
const fn = testFunction;            //this will store function into that variable - here the reference of function are being stored
console.log(fn);
fn();

//creating function using constructor - ***
/*  structure -
    new Function(...arguments, function_body) - all the arguments must be in string form
*/
const fn2 = new Function(   //first parameter is given argument by user, second parameter is the function body
    'str',
    `let obj = {};
    for(let s of str){
        if(s != ' '){
            obj[s] = s;
        }
    }
    return obj;`
);

console.log(fn2('Shah Alam'));
console.log();

//another one 
const greetfn = new Function(
    'name',
    'email',
    `
        const fName = name.split(' ')[0];
        console.log("Hello, ", fName, " Is that your email? ", email);
        console.log("Yeah, this is mine.");
        return fName;
    `
)

const fName = greetfn("Shah Alam", "shahalamabir21@gmail.com");
console.log('First Name : ', fName);
console.log();

//creating function from given data - ***
const fData = {
    params : ['a','b'],
    body : ['const r = a+b', 'return r']
};

const fBody = fData.body.reduce((acc, cur) => {
    acc += cur + ';';
    return acc;
}, '');

const tf = new Function(...fData.params, fBody);
console.log(tf(10, 20));
console.log(typeof tf);
console.log();

//another one 
const operations = [
    {
        args: [10,20],
        params: ['a','b'],
        body: `console.log("a + b = ", a+b);`
    },
    {
        args: [10,20],
        params: ['a','b'],
        body: `console.log("a - b = ", a-b);`
    },
    {
        args: [10,20],
        params: ['a','b'],
        body: `console.log("a x b = ", a*b);`
    },
    {
        args: [5],
        params: ['n'],
        body: `
        console.log();
            for(let i=0; i<n; i++){
                let line = "";
                for( let j=0; j<n; j++){
                    line += "* ";
                }
                console.log(line)
            }
        `
    }
]
// we can decide which function should be run at runtime by this --
operations.forEach(operation => {
    const fn3 = new Function(...operation.params, operation.body);
    fn3(...operation.args);
})

console.log();