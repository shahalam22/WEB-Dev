//exported to Modules2


//common js

// const hello = () => {
//     console.log("Good Morning")
// }

// const aHello = (name) => {
//     console.log("Good Morning, "+name)
// }

// module.exports = {hello, aHello};


//ES6 js

export const hello = () => {
    console.log("Good Morning")
}

export const aHello = (name) => {
    console.log("Good Morning, "+name)
}

//if we export default method then we can call the method without destructuring at there[where we imported the method]
const greet = () => {
    console.log("Assalamu Alaikum")
}

export default greet