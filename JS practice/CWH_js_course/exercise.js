//exercise of chapter 6

// // question - 1
// let age = prompt("Enter your age");
// age = Number.parseFloat(age);

// const canDrive = (age) => {
//     return age>=18 ? true : false;
// }

// if(canDrive(age)){
//     alert('You can drive...');
// } else {
//     alert('You can\'t drive...');
// }

// // question - 2
// let bool = true;

// const canDrive = (age) => {
//     return age>=18 ? true : false;
// }

// while(bool){
//     let age = prompt("Enter your age");
//     age = Number.parseFloat(age);

//     if(canDrive(age)){
//         alert('You can drive...');
//     } else {
//         alert('You can\'t drive...');
//     }

//     bool = confirm('Do you want to see prompt again?');
// }

// //question - 3
// let bool = true;

// const canDrive = (age) => {
//     return age>=18 ? true : false;
// }

// while(bool){
//     let age = prompt("Enter your age");
//     age = Number.parseFloat(age);

//     if(age<0){
//         console.error('The age you entered is negative.');
//         break;
//     }

//     if(canDrive(age)){
//         alert('You can drive...');
//     } else {
//         alert('You can\'t drive...');
//     }

//     bool = confirm('Do you want to see prompt again?');
// }

// //question - 4
// let age = prompt("Enter your age");
// age = Number.parseFloat(age);

// if(age>4){
//     location.href = "https://www.google.com";
// }

//question - 5
let color = prompt('Enter BG color : ');

document.body.style.backgroundColor = color;