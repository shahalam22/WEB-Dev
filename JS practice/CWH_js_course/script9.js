//CWH JS #42  #43  #44


//INSERTION INSIDE A TAG    #42

//id.getAttribute("attribute_name") - this gives the value of provided attribute_name
let first = document.getElementById("first")
let a = first.getAttribute("class")
console.log(a);

//id.hasAttribute("attribute_name") - this returns true if there exists any attribute name this "attribute_name"
console.log(first.hasAttribute("class"))        //true
console.log(first.hasAttribute("style"))        //false

//id.setAttribute("attribute_name", "attribute_value") - we can set attribute and it's value through this
first.setAttribute("style", "color: red")

//id.removeAttribute("attribute_name") - this removes given attribute from the id
first.removeAttribute("style")

//id.attributes - this returns a nodeList of attributes
console.log(first.attributes)

//we can create USER DEFINED attributes. To do so, we have to write "data-ATTRIBUTEname" for making custom attribute(js convension). This gives us a dataset to access the attributes
first.setAttribute("data-game", "angryBird")
first.setAttribute("data-player", "shahAlam")

console.log(first.dataset)          //gives nodelist of custom attributes
console.log(first.dataset.game)     //print value of the custom attribute
console.log(first.dataset.player)



//INSERTION INSIDE HTML PAGE    #43

let b = document.getElementsByTagName('div')[1]
//previous way to add element in the HTML PAGE [inside a tag] - should use to add small elements/data
// b.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';
// console.log(b.childNodes)

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World</h1>';
//to add - should use to add larger element/data
// b.appendChild(div);     //this will be added as the "b"'s last node
// console.log(b.childNodes[3].childNodes)
// b.prepend(div);            //this will be added as the "b"'s first node
// b.before(div);             //this will be added as the "b"'s before the selected node
// b.after(div);             //this will be added as the "b"'s after the selected node
// b.replaceWith(div);             //this will replace "b" 



//INSERTION ADJACENT [html/text/element]    #44

let third = document.getElementById("third");

//insertAdjacentHTML('place', 'code') - place [beforebegin/afterbegin/beforeend/afterend]
// third.insertAdjacentHTML('beforebegin', '<div class="test">This is a class BEFORE BEGIN</div>');
// third.insertAdjacentHTML('afterbegin', '<div class="test">This is a class AFTER BEGIN</div>');
// third.insertAdjacentHTML('beforeend', '<div class="test">This is a class BEFORE END</div>');
// third.insertAdjacentHTML('afterend', '<div class="test">This is a class AFTER BEGIN</div>');
//thus we also can insert element/text

//to remove-
third.remove();