//CWH JS #54 #55 #56 #57 #58
//full PROMISE



//#54
//PROMISSES - it has two property 1. state[reject/resolve], 2. result
/*  syntax
    let promise = new Promise(function(resolve, reject){ //ececution of code});
*/

// let promise = new Promise(function(resolve, reject){
//     alert("Hello");
//     resolve(56);
// })

// console.log("Hello One");
// setTimeout(function(){
//     console.log('Hello Two in 2 seconds');
// }, 2000);

// console.log("My name is "+"Hello Three");
// console.log(promise);

///when we want to run multiple functionalities of my code then we use promisses to ensure asynchronous programming 



//#55
//if promisses gets RESOLVED or REJECTED then we can perform below things
// let p1 = new Promise((resolve, reject) => {
//     console.log("Promise is pending");
//     setTimeout(()=>{
//         console.log("I am a resolved promise");
//         resolve(true);
//     }, 5000);
// });

// console.log(p1);

// let p2 = new Promise((resolve, reject) => {
//     console.log("Promise is pending");
//     setTimeout(()=>{
//         console.log("I am a rejected promise");
//         reject(new Error("This is rejected"));
//     }, 5000);
// });

// console.log(p2);
//see if we perform 2 setTimeout one after another then this program would take 10sec. But both of them now taking only 5sec.

//promise.then((value)=>{function code...}) - by this we can take the resolved code chunk and manipulate them as we want after execution of promise
//we only can pass two argument throw this - 1. value/result, 2. error
// p1.then((value)=>{
//     console.log(value);
// })

// promise.catch((error)=>{function code...}) - by this we can take the rejected code chunk and manipulate them as we want after execution of promise
// p2.catch((error)=>{
//     console.log("This is an ERROR");
// })

//handling both [value & error] using then
/*syntax - promise.then(resolve function, reject function)*/
// p1.then((value)=>{
//     console.log(value);
// }, (error)=>{
//     console.log("This is an ERROR");
// })

// p2.then((value)=>{
//     console.log(value);
// }, (error)=>{
//     console.log("This is an ERROR");
// })

//these also can be given - this will just give resolve/reject result as alert
// p1.then(alert)
// p2.catch(alert)



//#56
//CHAINING OF PROMISSES [instead of CALLBACK HELL]
/*SYNTAX
        creating promise 1
        promise1.then((value)=>{
            creating promise 2
            return promise 2
        }, (error1)=>{}).then((return value of promise 2)=>{
            creating promise 3
            return promise 3
        }, (error2)=>{}).then((return value of promise 2)=>{
            creating promise 3
            return promise 3
        }, (error3)=>{}).....goes on
*/

// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Resolved after 2 seconds")
//         resolve("resolved 1")
//     }, 2000)
// }).then((value)=>{
//     // console.log(value)
//     let p4 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('Resolved 2 after 4 seconds')
//             resolve('resolved 2')
//         }, 2000)
//     })
//     return p4
// }).then((value)=>{
//     // console.log(value)
//     let p5 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('Resolved 3 after 6 seconds')
//             resolve('resolved 3')
//         }, 2000)
//     })
//     return p5
// }).then((value)=>{
//     // console.log(value);
//     console.log("We are done with three promisses")
// })

//prevously done LOADSCRIPT function using chaining of promises
// const laodScript = (src) => {
//     return new Promise((resolve, reject) =>{
//         let script = document.createElement("script")
//         script.type = "text/javascript"
//         script.src = src;
//         console.log(script)
//         document.body.appendChild(script);
//         script.onload = ()=>{
//             resolve(1)
//         }
//         script.onerror = ()=>{
//             reject(0)
//         }
//     })
// }

// let p6 = laodScript("http://127.0.0.1:5500/demo/prac1.js")
// p6.then((value)=>{
//     console.log("Completed 1")
//     let p7 = laodScript("http://127.0.0.1:5500/demo/script10.js")
//     return p7
// }).then((value)=>{
//     console.log("Completed 2")
//     let p8 = laodScript("http://127.0.0.1:5500/demo/script11.js")
//     return p8
// }).then((value)=>{
//     console.log("Completed 3")
// }).catch((error)=>{
//     console.log("We are in trouble to load this script")
// })

//here we used only one catch to handle all the promises



//#57
//attaching multiple handlers to a promise
// let p9 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         alert("I am resolved")
//         resolve(1)
//     }, 2000)
// })

// p9.then(()=>{
//     console.log('1st handle of Promise 1 executing')
// })
// p9.then(()=>{
//     console.log('2nd handle of Promise 1 executing')
// })



//#58
//PROMISE API - this just gives us some built-in methods to manipulate the promises we made
let p10 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('value 10')
    }, 1000)
})

let p11 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('value 11')
        // reject(new Error('This is an error'))
    }, 2000)
})

let p12 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('value 12')
    }, 3000)
})
//all of these promises will run at the same time

// p10.then((value)=>{
//     console.log(value);
// })

// p11.then((value)=>{
//     console.log(value);
// })

// p12.then((value)=>{
//     console.log(value);
// })

// //Promise.all([])
// //here after 1 sec we will see result of p10, after 2 sec we will see result of p11, after 3 sec we will see result of p12
// //if there is a case that we have to see all these three result at a single moment when all of them are resolved[in web we can't fix the time of resolve. it will be a random value]
// //to so to so so we can make a new promise[array of promises] that made of these three promise. and get this issue fix
// let promise_all = Promise.all([p10,p11,p12])
// promise_all.then((value)=>{
//     console.log(value)
// })
// //result will shown in array as we give promise [p10Result, p11Result, p12Result]

// //Promise.allSettled([])
// //Promise.all([]) has a problem that if there is an error in any of the given promises then whole result will give an error & rest of the resolved promises won't show their resolved value
// //in that case if we want to see those resolved values then we do perfoems "Promise.allSettled([])"
// let promise_all = Promise.allSettled([p10,p11,p12])
// promise_all.then((value)=>{
//     console.log(value)
// })
// //this will give us full report of these promises in array

// //Promise.race([]) - it will give the resolved/rejected value of fastest promise
// let promise_all = Promise.race([p10,p11,p12])
// promise_all.then((value)=>{
//     console.log(value)
// })

// //Promise.any([]) - if fastest promise gives an error. Then this will show the fastest resolved promise
// let promise_all = Promise.any([p10,p11,p12])
// promise_all.then((value)=>{
//     console.log(value)
// })
// //if none of the promises are resolved then it will forcefully return an error

// //Promise.resolve(value) - makes a resolved promise with the given value
// let promise_all = Promise.resolve('value 13')
// promise_all.then((value)=>{
//     console.log(value)
// })

// //Promise.reject(error) - makes a rejected promise with the given error
// let promise_all = Promise.reject('This is an error of promise 14')
// promise_all.then((value)=>{
//     console.log(value)
// })