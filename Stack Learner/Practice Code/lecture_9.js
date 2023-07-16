/* FUNCTIONAL PROGRAMMING */

/*
function statement -  function name(){};
function expression - const variable = function name() {};
function expression - const variable = function () {};
function expression - const variable = () => {};
*/


/* Pure Function */
//this has no side effect like doesn't change any value out of it's scope, 
function sum(a,b){
    return a+b;
}

//example of an impure function
let limit = 100;
function changeLimit(){
    limit = 500;
}

// this is a pure function
// function changeLimit(limit){
//     limit = 500;
// }

changeLimit(limit);
console.log(limit);

//this is a impure function
// function msge(msg){
//     console.log(msg);
// }

//if function update any array out of it's scope then it also would be a pure function. Because it doesn't entirely changing the array
let arr = [4,5,6];
function updateArr(arr, data){
    arr.push(data);
}

updateArr(arr, 14);
console.log(arr);


/*Higher Order Function*/
/*
 - function can be passed as an argument
 - function can be return from another function

 -- Hidden concept in higher order function --
 - Scope - [ykyk] - 1. Global scope, 2. Local scope, 3. Lexical scope
 - Closure - memory space that stores value of a function after also the function died for later use [if there has any chance to use that value]
 - Execution Context
 - Hoisting
*/
//our function must be pure to work with functional programming

//function passed as argument
function generateTwoRandomNumber(max, cb){
    const random1 = Math.floor(Math.random()*max);
    const random2 = Math.floor(Math.random()*max);
    const result = cb(random1, random2);
    return result;
}

generateTwoRandomNumber(100, (rand1, rand2) => {console.log(rand1, rand2);})
generateTwoRandomNumber(100, (rand1, rand2) => {console.log(rand1+rand2);})
generateTwoRandomNumber(100, (rand1, rand2) => {console.log(rand1-rand2);})
generateTwoRandomNumber(100, (rand1, rand2) => {console.log(rand1*rand2);})
console.log();

// we can do this instead of creating individual function for sum, sub, mul , etc functions

//function retured from another function
function power(p){
    return function (n){
        let a = 1;
        for(let i=0; i<p; i++){
            a *= n;
        }
        return a;
    }
}

const sqr = power(2);
const cube = power(3);
const power5 = power(5);

console.log(sqr(3));
console.log(sqr(4));
console.log(sqr(5));
console.log();

/* Execution Context */
function A(){
    console.log("I'm A");
};
function B(){
    A();
};
function C(){
    B();
    B();
};
function D(){
    C();
    A();
};

D();    //execution flow will be - D(C(B(A())B(A()))A())

console.log();

/* Hoisting */
// using variable before declaring 

/* IIFE - Instantly Invoked Function Expression */

(function (name){
    console.log(name);
})('Turkey IIFE');

console.log('Turkey');

console.log();