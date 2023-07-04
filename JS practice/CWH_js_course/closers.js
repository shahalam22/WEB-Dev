
// // example - 1

// let message = "Good Global"
// function func1(){
//     let message = "Good morning"
//     {
//         let message = "Good afternoon"
//         console.log("Hello 1: " + message)
//     }
//     console.log("Hello 1: " + message)

//     //this is a closer function. it returns with the properties & lexical environment of this scope to outside. Though all the variable declared in this scope get destroyed as the scope ends but we can get properties by this function.
//     let a = function func2(){
//         console.log("I'm so good : " + message)
//     }
//     return a
// }

// let func2 = func1()
// func2()

// console.log("Hello 1: " + message)


// example - 2
function returnFunc(){
    const a = () => {
        let a = 1
        console.log(a)
        const b = () => {
            let a = 2
            console.log(a)
            const c = () => {
                // let a = 3
                console.log(a)
            }
            a = 99
            c()
        }
        b()
    }
    return a
}

let x = returnFunc()
x()