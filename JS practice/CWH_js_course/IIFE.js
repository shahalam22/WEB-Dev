//CWH JS #85
//IIFE - immediately invoked function expression



let a = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(456)
        }, 1000)
    })
}

// let f = async () => {
//     let b = await a()
//     console.log(b)
//     let c = await a()
//     console.log(c)
//     let d = await a()
//     console.log(d)
// }

// f()

//instead of this async fucnction we can do this, which is called IIFE
(async () => {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})()

//after execution this IIFE, all the memory spaces it took inside for performance, all of these spaces will be free autometically