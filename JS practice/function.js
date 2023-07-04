/* Syntax
    function function_name(parameters){
        function body codes....
    }
*/

//creating function || here, "message is parameter"
function say(message){
    console.log(message);
}

//calling function || here "Assalamu Alaikum" is argument
say('Assalamu Alaikum');

//function returning value
function add(a, b){
    return (a+b);
}

let result = add(5,8);
console.log(result);

//another function
function compare(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
}

result = compare(5, 4);
console.log(result);

//another example || thus we can use variable number of arguments

function add(){
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(add(1,2,3,4,5));

//example of function hoisting (Function hoisting is a mechanism that the JavaScript engine physically moves function declarations to the top of the code before executing them) - you can use function before declaring it.

showMe();

function showMe(){
    console.log('an hoisting example...');
}

