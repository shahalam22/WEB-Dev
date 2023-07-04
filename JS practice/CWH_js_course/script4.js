//CWH JS #31 #32 #33 #34

// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)   //this is not an array but looks like array. it is a collection. we can convert it into array but then the methods of these nodes won't work

// console.log(document.body.childNodes[0]===document.body.firstChild)
// console.log(document.body.childNodes[document.body.childNodes.length-1]===document.body.lastChild)

// console.log(document.body.hasChildNodes())

//$0.nextSibling - $0 diye ekta part indicate kora thake devtool er 'Elements' e. amra chaile oitake just eivabe access korte pari [document.elementName.node er bodole]

// a = document.body.firstChild
// console.log(a.parentNode)       //html er parent kew na. But eta document er under e pore. tokhon ei parentNode return korbe 'document'
// console.log(a.parentElement)    //uporer case e ei parentElement return korbe null
// console.log(a.firstChild.nextSibling)

//ekhane sobcheye boro drawback holo amader html page e thaka comment, emptyspace o node hishebe count korteche js engine. eita skip korte amra use korbo "ELEMENT ONLY NEVIGATION"
//"ELEMENT ONLY NEVIGATION" egula prac1.js e ache