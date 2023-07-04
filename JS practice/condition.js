/* SYNTAX --
    if(condition){
        codes...
        codes...
        codes...
    }
*/

let age = 16;
if (age >= 18) {
  console.log('You can sign up');
}

/* SYNTAX --
    if(condition 1){
        if(condition 2){
            codes...
            codes...
            codes...
        }
    }
*/

let state = 'CA';
if (state == 'CA') {
  if (age >= 16) {
    console.log('You can drive.');
  }
}

// we can write this nested using if(state == 'CA' && age == 16) {code}
// if we have more than one condition inside any if only then we can use nested if. Else we can use above code usnig AND operator


/* --ELSE CONDITION-- */
/* SYNTAX
    if(condition){
        codes...
    } else {
        codes...
    }
*/

if (age >= 18) {
    console.log('You can sign up.');
  } else {
    console.log('You must be at least 18 to sign up.');
  }


/* --ELSE-IF CONDITION-- */
/* SYNTAX
    if(condition){
        codes...
    } else if(condition){
        codes...
    } else {
        codes...
    }
*/

let weight = 70;
let height = 1.72;
let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5) {
  weightStatus = 'Underweight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
  weightStatus = 'Healthy Weight';
} else if (bmi >= 25 && bmi <= 29.9) {
  weightStatus = 'Overweight';
} else {
  weightStatus = 'Obesity';
}

console.log(weightStatus);


/* --TERNARY OPERATOR-- */
/* SYNTAX
    condition ? (if true perform this) : (if false perform this);
*/

let age2 = 18;
let message;
age2 >= 16 ? (message = 'You can drive.') : (message = 'You cannot drive.');
console.log(message);

// third line can be written like : message = age >= 16 ? 'You can drive.' : 'You cannot drive.';
//multiple ternary operator : condition1 ? (performs if condition1 is true) : condition2 ? (performs if condition2 true) : default
