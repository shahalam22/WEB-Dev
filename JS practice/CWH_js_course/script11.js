//CWH JS #47 #48

//INTRODUCTION TO BROWSER EVENTS
//mouse event, keyboard event, formElement events, document events

//MOUSE EVENTS
// onclick
// onmouseup
// onmousedown
// onmouseenter
// onmouseleave
// onmousemove
// onmouseout
// onmouseover

let a = document.getElementsByClassName('container2')[0];
a.onclick = () => {
    let b = document.getElementsByClassName('container2')[0];
    b.innerHTML = "Hello world!";
};

//if we have same event in html tag in html page & also have seme event for same class in js file. Then js file's event will get priority


//EVENTLISTENER [ADD, REMOVE]
//if we have two event for an element and for a single moment we want to perform only one event. Then we can remove one event using event listener
let btn = document.getElementById('btn');

let x = function(e){
    // console.log(e);             //this "e" is an eventObject. Which points towards the target for which we called it through eventListener
    // console.log(e.target, e.type, e.clientX, e.clientY);      //this eventObject has a lots of builtIn properties we can inpect target through this object. If we don't use this then js engine will give it by default. 
    //e.type - returns type of event [this is a pointer], e.clientX & e.clientY - this returns the pixel value of X & Y axis where user performed the event
    alert("Hello 1");
};

let y = function(e){
    alert("Hello 2");
};

btn.addEventListener('click', x);       // "e" of function is "btn"

btn.addEventListener('click', y);

let c = prompt('Enter your favorite number : ');

if(c == "2"){
    btn.removeEventListener('click', x);
}