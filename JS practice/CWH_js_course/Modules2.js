//imported from Modules1


//common js

// //normally access to the module's function
// const obj = require("./Modules1")
// obj.hello()
// obj.aHello("Abir")

// //we can access to module function by destructuring
// const {hello, aHello} = require("./Modules1")
// hello()
// aHello('Abir')
// aHello('Hasin')


//ES6 js 

import greet, {hello, aHello} from "./Modules1.js"
hello()
aHello('Abir')
aHello('Hasin')
greet()