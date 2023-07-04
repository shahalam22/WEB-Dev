//CWH JS #34

//styling html using js code
const changeBodyRed = () => {
    document.body.firstElementChild.style.background = 'red'
}

let b = document.body
console.log("First child of b is : ", b.firstChild)     //it gives us whatever [any valid element/whitespace/comment] belongs after body tag
console.log("Fisrt element of b is : ", b.firstElementChild)    //it gives us first valid element. This is "ELEMENT ONLY NAVIGATION"

console.log(b.nextElementSibling)
console.log(b.previousElementSibling)
console.log(b.firstElementChild)
console.log(b.lastElementChild)

changeBodyRed();

