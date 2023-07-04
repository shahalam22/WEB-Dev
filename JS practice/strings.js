/*JavaScript strings are primitive values. Also, strings are immutable. It means that if you modify a string, you will always get a new string. The original string doesn’t change.

To create literal strings, you use either single quotes (') or double quotes (") like this: */

let str = 'Hi';
console.log(str);

let greeting = "Hello";
console.log(greeting);

str = 'I\'m a string!';
console.log(str);

//template literals - this allows to use '' or "" without / in the string
let nam = `abir`;
console.log(nam);

let messege = `"I'm good"`;
console.log(messege);

// you can place the variables and expressions inside a template literal. JavaScript will replace the variables with their value in the string. This is called string INTERPOLATION.
messege = `Hi, I'm ${nam}`;
console.log(messege);

//length of string
console.log("Length of str is - "+str.length);

//accessing random character in string
console.log("Value ar 0th index - "+str[0]);

//concatinating using + operator
nam = "Shah alam " + nam;
console.log(nam);

//convert non-string to string

//way - 1
let val = false;     //this is a boolean type data
console.log(typeof(val));
console.log(String(val));
console.log(typeof(String(val)));

//way - 2
console.log(typeof(val));
console.log(val.toString());
console.log(typeof(val.toString()));

// Note that only string for which the Boolean() returns false, is the empty string ('')

//comparing string
let ans = 'a' < 'b';
console.log(ans);

ans = 'a' < 'B';
console.log(ans);