//CWH JS #28
//BOM(Browser Object Model) & DOM(Document Object Model)
//DOM - pura html page ke ekta js object banano hoise jetake 'Document' nam deya hoise. ebar ei 'Document' ke niyei nana manipulation kore kaj korte hobe
//BOM - 'document' chara amader additional kono object lagle segulo browser[host environment] amader dey to work with everything except document. ei object guloi BOM
//must read note

window.console.log(window);
console.log(document);

//DOM code
console.log(document.body);     //thus we can access elements of HTML page
document.body.style.backgroundColor = "pink";      //thus we can do all css works using js

//BOM code
//alert(), prompt(), confirm() - these are BOM code
alert('hello');