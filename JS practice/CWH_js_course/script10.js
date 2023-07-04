//CWH JS #45  #46

//CLASSNAME & CLASSLIST

//className 
let first = document.getElementById("first");
first.className = "text-dark red"       //thus we can dynamically update css using javascript

//classList - it shows all the classes included into an element
console.log(first.classList);

//we can remove classes using classList
first.classList.remove("red");
console.log(first.classList);

//we can also add classes using classList
first.classList.add("red");
console.log(first.classList);

//toggle in classList - if class is there then removes it. if not there then adds it
first.classList.toggle("red");
console.log(first.classList)

first.classList.toggle("red");
console.log(first.classList)

//contains - it the class exists in the classList
console.log(first.classList.contains("red"));
console.log(first.classList.contains("blue"));


//SETTIMEOUT & SETINTERVAL

//setTimeout - when we have to run javascript code after some times
alert("Hello")
let a = setTimeout(function(){
    alert("I'm inside setTimeout");
}, 3000)

//clearTimeout(name) - to stop execution of timeout
let b = prompt("Do you want to cancel timeOut?")
if("n"==b){
    clearTimeout(a)
}
console.log(a);

//setInterval - when we have to run javascript code again again after some time interval
// const sum = (a,b,c) => {
//     console.log("I am running " + (a+b+c));
//     return a+b+c;
// };

// setInterval(sum, 2000, 1,2,3);

let c = setInterval(function(){
    alert("Yo Yo pani sing");
}, 3000);

clearInterval(c);