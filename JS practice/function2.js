// JavaScript functions are first-class citizens. This means that you can store functions in variables, pass them to other functions as arguments, and return them from other functions as values.
function add(a, b) {
    return a + b;
}

//treating function as variable
let sum = add;
console.log(add(5,6));
console.log(sum(5,6));

//passing function as argument to other function
function average(a, b, jog){
    return jog(a,b)/2 ;
}

console.log(average(6, 8, sum));

//returning function from another function
function compareBy(propertyName){
    return function (m,n){      
        let x = m.propertyName, y = n.propertyName;
        if(x>y){
            return 1;
        }
        else if(x<y){
            return -1;
        }
        else {
            return 0;
        }
    };
}

let products = [
    {name: 'iPhone', price: 900},
    {name: 'Samsung Galaxy', price: 850},
    {name: 'Sony Xperia', price: 700},
];

console.log('Products sorted by name:');
products.sort(compareBy('name'));
console.table(products);

console.log('Products sorted by price:');
products.sort(compareBy('price'));
console.table(products);

//another example
function cmToIn(length){
    return length/2.54;
}

function inToCm(length){
    return length*2.54;
}

function convert(fn, length){
    return fn(length);
}

console.log(convert(cmToIn, 10));
console.log(convert(inToCm, 10));


//anonymous function : A function without name. It must be in () otherwise it will give syntactical error
// An anonymous function is not accessible after its initial creation. Therefore, you often need to assign it to a variable.
/* syntax
    (
        function(){
            function body...
        }
    );
*/

//Since the whole assignment of the anonymous function to the show variable makes a valid expression, you don’t need to wrap the anonymous function inside the parentheses ()
let show = function(){
    console.log('Anonymous Function');
};

show();

//anonymous function as argument
setTimeout(function(){
    console.log('Execute later after 2 second...')
}, 2000);

//immediately invoked function execution -- calling function after as it declared
(function() {
    console.log("Immediately invoked after execution.");
})();

//passing arguments at anonymous function
let person = {
    firstName : 'John',
    lastName : 'Doe'
};

(function() {
    console.log(person.firstName+" "+person.lastName);
})(person);


//ARROW FUNCTION  -  ES6 introduced arrow function expressions that provide a shorthand for declaring anonymous functions
let show2 = () => console.log('Amomymous Function.');
let add2 = (a,b) => a+b;

show2();
console.log(add2(8,9));