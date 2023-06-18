//Arithmatic Operator : + - * /

// summation +
let sum = 10 + 20;
console.log(sum);

let netPrice    = 9.99, shippingFee = 1.99;
let grossPrice  = netPrice + shippingFee;
console.log(grossPrice);

//If both values are strings, it concatenates the second string to the first one
let x = '10', y = '20';
let result = x + y;
console.log(result);

//If one value is a string, it implicitly converts the numeric value into a string and concatenates two strings
let result2 = 10 + '20';
console.log(result2);

// subtraction - 
let result3 = 30 - 10;
console.log(result3);

// If a value is a string, a boolean, null, or undefined, the JavaScript engine will:
//1. convert the value to a number using the Number() function.
//2. perform the subtraction.
let result4 = '30' - 15;
console.log(result4);

// multiplication * 
let result5 = 5*2;
console.log(result5);

//if a value is not a number than js engine converts this into number using number() function then performs multiplication
let result6 = '5'*2;
console.log(result6);

let result7 = '5'*'2';
console.log(result7);

// division / 
let result8 = 10/2;
console.log(result8);

//if a value is not a number than js engine converts this into number using number() function then performs multiplication
let result9 = '10'/2;
console.log(result9);

let result10 = '10'/'2';
console.log(result10);

/* ---Reminder Operator--- */
// with positive devidend
let remainder = 5 % -2;
console.log(remainder);

remainder = 5 % 2;
console.log(remainder);

// with negative devidend
remainder = -5 % 3;
console.log(remainder);

remainder = -5 % -3;
console.log(remainder);

//this will print NaN
remainder = Infinity % 2;
console.log(remainder);

remainder = 20 % 0;
console.log(remainder);

remainder = Infinity % Infinity;
console.log(remainder);

//this will print normal
remainder = 10 % Infinity;
console.log(remainder);

remainder = 0 % 20;
console.log(remainder);

//if we use other types of data it will convert these into number by number() function
remainder = '10' % 3;
console.log(remainder);

//this will print NaN
remainder = 'a' % 2;
console.log(remainder);

//in javaScript remainder != modulo. To get remainder we use "%" sign. To get modulo we have to use "((dividend % divisor) + divisor) % divisor"

/* ---Assignment Operator--- */
/* =, +=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>=, **= */

/* ---Unary Operator--- */
/* +x, -x, ++x, x++, --x, x-- */

/* ---Comparison Operator--- */
/* <, >, <=, >=, ==, != */

let a = 10, b = 20; 
console.log(a >= b);
console.log(a == 10);

// to compare string, js engine compares character codes numerically
let name1 = 'alice', name2 = 'bob';
result = name1 < name2;
console.log(result);
console.log(name1 == 'alice');

//if we compare number with other type of data type, then js engine converts other data type value into number by number() function
console.log(10 < '20'); //true

//In JavaScript, null equals undefined. It means that the following expression returns true.
console.log(null == undefined);

// " === " means strict equal [data type same + value same]
// " !== " means not strict equal
console.log("10" == 10); //true
console.log("10" === 10) //false

/* ---Logical Operator--- */
/* ! [if value true prints false, if false prints true], ||, &&, !! [if value true then prints true, if false prints false] */
/*  
    x ||= y means x = x || (x = y)  //The logical OR assignment operator (||=) accepts two operands and assigns the right operand to the left operand if the left operand is falsy
    x &&= y means x = x && (x = y)  //The logical AND assignment operator only assigns y to x if x is truthy
    x ??= y means x = x ?? (x = y)  //The nullish coalescing assignment operator only assigns y to x if x is null or undefined
*/

let title;
title ||= 'untitled';
console.log(title);

let title2 = 'JavaScript Awesome';
title2 ||= 'untitled';
console.log(title2);

let title3;
title3 &&= 'untitled';
console.log(title3);

let title4 = 'JavaScript Awesome';
title4 &&= 'This is beautiful';
console.log(title4);


//A nullish value is a value that is either null or undefined.
let user = {
    username: 'Satoshi',
    address: 'Main Street'
};
user.address ??= 'Down Street';
user.nickname ??= 'anonymous';
console.log(user);

/* ---Exponential Operator--- */    // " ** "
let ans = Math.pow(2,3);
console.log(ans);
//we can do this using " ** " operator. x**n where x is base and n is the power.
console.log(2**3);

let ans2 = 2;
ans2 **= 4;
console.log(ans2);

//JavaScript does not allow you to put a unary operator immediately before the base number. If you attempt to do so, you’ll get a SyntaxError.
/* let result = -2**3; this will give syntax error */
/* let result = (-2)**3; this will give proper ans that is -8 */


/* --COMMA OPERATOR-- */
//JavaScript uses a comma (,) to represent the comma operator. A comma operator takes two expressions, evaluates them from left to right, and returns the value of the right expression
let m = 10;
let n = (m++, m + 1);
console.log(m, n);