/*
if we declared function like
    function say(message){
        console.log(message);
    }

    say(); //this will give a 'undefined' as the result
*/


//default parameter

/* SYNTAX - 
    function fn(param1=default1, param2=default2,..) {
    
    } 
*/

function say(message='HI'){
    console.log(message);
}

say();
say('Hello');

//we also can write this like - 
function say2(message){
    message = typeof message !== 'undefined' ? message : 'HI';
    console.log(message);
}

say2();
say2('Hello');


//another example of default parameter
function date(d = today()){
    console.log(d);
}

function today(){
    return (new Date()).toLocaleDateString("en-US");
}

date();             //without parameter
date("5/15/2022");  //with parameter


//we can use this freature to make arguments mandatory by throwing error
function requiredArg(){
    throw new Error("The argument is required.")
}

function add(x = requiredArg(), y = requiredArg()){
    return x+y;
}

// console.log(add(10));       //error
console.log(add(10,20));        //ok


//using other parameters in default values
function add2(x = 1, y = x, z = x+y){
    return (x+y+z);
}

console.log(add2());


//If you reference the parameter that has not been initialized yet, you will get an error
//Uncaught ReferenceError: Cannot access 'y' before initialization
//in my mechine it doesn't show any error
function subtract( m = n, n = 1 ) {
    return m - n;
}
console.log(subtract(10));


//You can use a return value of a function as a default value for a parameter.
let taxRate = () => 0.1;
let getPrice = function( price, tax = price * taxRate() ) {
    return price + tax;
}

let fullPrice = getPrice(100);
console.log(fullPrice);