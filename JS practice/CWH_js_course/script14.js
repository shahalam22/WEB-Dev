//CWH JS #59
//ASYNC & AWAIT - by this we can declare a function as async then, we can make separate chunk of codes from this function wait for a certain period of time



//async fuction always returns a promise. So, we can execute promise operations over this
async function demo(){
    let delhiWeather = new Promise((resolve, reject)=>{
        setInterval(()=>{
            resolve("27 Deg")
        }, 2000)
    })

    let dhakaWeather = new Promise((resolve, reject)=>{
        setInterval(()=>{
            resolve("37 Deg")
        }, 6000)
    })

    // delhiWeather.then(alert)
    // dhakaWeather.then(alert)
    console.log("Fetching Delhi Weather Please Wait...")
    let delhiW = await delhiWeather     //before this line execution was asynchronous. but here "await" stops proceeding of program until get final results from "delhiWeather" promise
    console.log("Fetched Delhi Weather: " + delhiW)
    
    console.log("Fetching Dhaka Weather Please Wait...")
    let dhakaW = await dhakaWeather     //this line will stop the proceeding of program because of "await" keyword until the "dhakaWeather" promise gives a final result
    console.log("Fetched Dhaka Weather: " + dhakaW)

    //thus, using "await" keyword we can make sure of exucution of a part of function before proceeding to next
    //suppose, we need r to execute m, then we can use "await" to r before executing m and make sure that r finished it's execution then we can perform execution of m

    return [delhiW, dhakaW]
}

const demo2 = () => {
    console.log("This is another non-async funtion")
}

//here, demo & demo2 function will execute asynchronously[parallely]. This is not like that "demo" will finish his execution then "demo2" will start executin. Inner await has no effet outside of the function.

console.log("Welcome to weather control room")
let a = demo()
let b = demo2()
a.then((value)=>{
    console.log(value)
})


// //there demo will execute first then demo2 will start executing
// const demo2 = async () => {
//     console.log("This is another async funtion")
// }

// const main = async () => {
//     console.log("Welcome to weather control room")
//     let a = await demo()
//     let b = await demo2()
// }

// main()