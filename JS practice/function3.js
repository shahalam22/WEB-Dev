//In JavaScript, all function arguments are always passed by value [for primitive value].

function square(x){
    x = x*x;
    return x;
}

let y = 10;
let ans = square(y);

console.log(ans);
console.log(y);


//pass by reference  -  for objects
let person = {
    name: 'John',
    age: 25,
  };
  
function increaseAge(obj) {
  obj.age += 1;
}
  
increaseAge(person);
console.log(person);


//A recursive function is a function that calls itself until it doesn’t. And this technique is called recursion.
/* SYNTAX
    function recurse(){
        if(condition for stop recursion){
            code...
        }
        else{
            code...
            recurse();
        }
    }
*/

function countdown(n){
    console.log(n);
    if(n-1>0){
        countdown(n-1);
    }
}

countdown(4);

// let newYearCountDown = countdown;
// countdown = null;
// newYearCountDown(10);
//If the function name is set to null somewhere in the code, the recursive function will stop working.

//this won't give any error!! because, we declared a variable of function of countdown
let countDown = function f(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        f(nextNumber);
    }
}

let newYearCountDown = countDown;
countDown = null;
newYearCountDown(4);


//recursive function for summation
function sum(n){
    if(n<=1){
        return n;
    }
    return n + sum(n-1);
}

let result = sum(5);
console.log(result);