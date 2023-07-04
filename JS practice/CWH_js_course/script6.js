//CWH JS #36
//searching into the DOM


//uses of "getElementById"
let cTitle = document.getElementById('firstCardTitle')
cTitle.style.color = 'red'

//uses of "getElementByClassName"
let cTitle2 = document.getElementsByClassName('card-title')[1]
let cTitle3 = document.getElementsByClassName('card-title')[2]
cTitle2.style.color = 'blue'
cTitle3.style.color = 'orange'

//uses of "querySelectorAll" - selects all the selectors[class(_._)/id(_#_)] that we defined
let cTitle4 = document.querySelectorAll(".card-title")
console.log(cTitle4)
cTitle4[0].style.color = 'cyan'
cTitle4[1].style.color = 'pink'
cTitle4[2].style.color = 'brown'

//uses of "querySelector" - this just selects first element of the selector
document.querySelector(".this").style.color = "red"
document.querySelector(".this").style.background = "black"

//uses of "getElementByTagName"
console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card-title").getElementsByTagName("a"))    //this gives us to search all "a" in "card-title" class

//uses of "getElementsByName"
// console.log(document.getElementsByName('NAME'))