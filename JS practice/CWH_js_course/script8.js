//CWH JS #42
//console.dir - returns element as OBJECT with it's property
console.log(document.getElementsByTagName("span")[0])
console.dir(document.getElementsByTagName("span")[0])

//nodeName - returns the name of object
console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

//.data  .nodeValue - it gives the content inside the tag
console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue)

//innerHTML - it gives what inside in the html tag - valid for element node only
console.log(document.getElementById('first').innerHTML)
//we can do change through it
document.getElementById('first').innerHTML = '<i>That\'s my boy</i>'

//outerHTML - it gives all the things inside html tag with the tag itself
console.log(document.getElementById('second').outerHTML)
document.getElementById('second').outerHTML = '<p>Hey you listen to me.</p>'

//textContent - only gives all the inside text content except tags
console.log(document.body.textContent) 
console.log(document.body.childNodes[3].textContent) 

//hidden - if we set it's value false then shows the hidden value
//normally 'third' id will be hidden. if we write "third.hidden = false" in console then it will be showned to us