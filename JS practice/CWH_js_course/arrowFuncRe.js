
//arrow function

// const sayHello = (name) => console.log("Hello " + name)     //expressing arrow function like this is not recommended as it is not readable
// sayHello('Abir')

// //for normal function
// const x = {
//     name: 'Abir',
//     role: 'JS Developer',
//     exp: 30,
//     show: function(){   //here, this will point "x"
//         console.log(`Name is : ${this.name}\nRole is : ${this.role}`)
//     }
// }

// x.show()

// //here, this will not point "x". Rather, this will point the inner scope[setTimeout]
// const y = {
//     name: 'Abir',
//     role: 'JS Developer',
//     exp: 30,
//     show: function(){   
//         console.log(this)   //this points to the object
//         setTimeout(function(){
//             console.log(this)   //this points to the window[global object]
//             console.log(`Name is : ${this.name}\nRole is : ${this.role}`)
//         }, 2000)
//     }
// }

// y.show()

// //to fix this we can do ->
// const y = {
//     name: 'Abir',
//     role: 'JS Developer',
//     exp: 30,
//     show: function(){   
//         // console.log(this)   //this points to the object
//         let that = this
//         setTimeout(function(){
//             // console.log(this)   //this points to the window[global object]
//             console.log(`Name is : ${that.name}\nRole is : ${that.role}`)
//         }, 2000)
//     }
// }

// y.show()

//to fix this[using arrow function] we can do ->
//here, arrow function has no window object. "this" inside arrow function simply points to the object of parent scope
const y = {
    name: 'Abir',
    role: 'JS Developer',
    exp: 30,
    show: function(){
        setTimeout(() => {  
            console.log(`Name is : ${this.name}\nRole is : ${this.role}`)
        }, 2000)
    }
}

y.show()