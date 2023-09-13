let number1 = 0;
let number2 = 0;

const display1 = document.querySelector("#display1");
const button1 = document.querySelector("#button1");
const display2 = document.querySelector("#display2");
const button2 = document.querySelector("#button2");

button1.addEventListener("click", ()=>{
    number1++;
    display1.textContent = number1;
})

//here, problem is that if we add more counter then we have to select every display and button with different query selector and then it would be troublesome to build large scale application
button2.addEventListener("click", ()=>{
    number2++;
    display2.textContent = number2;
})
