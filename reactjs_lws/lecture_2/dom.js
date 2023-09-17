let array = [];
let increment = 0;
let container = document.querySelector('.container');

// virtual DOM - this is a place where we can do rough code. Then we will move main codes[how much do we need] from this playground to the main js file

// fast
while(increment < 10000){
    array.push(++increment);
}   // this is a batch upload example where we first batched all the inputs in an array then uploaded them all at a time

// // slow
// while(increment < 10000){
//     increment++;
//     container.innerHTML += increment + ' ';
// }

container.innerHTML = array.join(' ');