//creating object
let a = {
    name: 'abir',
    city: 'narayangonj',
    run: () => {        //this run() method is an overridden [from it's parent "b"] method
        alert("Self run")
    }
}

console.log(a)

let b = {
    run: () => {
        alert('Run')
    }
}

b.__proto__ = {
    uni: 'Dhaka University',
    college: 'Dhaka College'
}

//protitypial inheritance
a.__proto__ = b         //this means "a" is a child of "b"

a.run()         //this will look for "run()" method in "a", if finds then will execute that run() method else will search a's parent [b] for run() method

console.log(a.uni)          //this will check a for 'uni' if don't get it then will check it's parent b, if don't finds in the parent then will check b's parent
console.log(a.college)

// parent [java] = proto [javascript]