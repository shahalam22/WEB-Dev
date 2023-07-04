//CWH JS  #60  #61  #62



// //#60
// //ERROR HANDLING [try - catch]

// setTimeout(()=>{
//     console.log("Hacking wifi... Please wait...")
// }, 1000)

// setTimeout(()=>{
//     console.log("Fetching username... Please wait...")
// }, 2000)


// try{
//     // console.log(errorMessage)      //this will give an error. Codes after this error won't run for this error. To run them and handle this error, we will use TRY CATCH
//     //if we set timeout in this errorful statement, then our error won't be handled. In that case we have to perform another try catch inside setTimeout
//     setTimeout(()=>{
//         try{
//             console.log(errorMessage02)
//         } catch(error){
//             console.log("This is an error inside setTimeout")
//         }
//     }, 100)
// } catch(error){
//     console.log("This line got an error")
// }


// setTimeout(()=>{
//     console.log("Fetching password... Please wait...")
// }, 3000)

// setTimeout(()=>{
//     console.log("Resetting user manual... Please wait...")
// }, 4000)

// setTimeout(()=>{
//     console.log("Wifi hacked successfully")
// }, 5000)



// //#61
// //ERROR OBJECT & CUSTOM ERROR

// //ERROR OBJECT has two property - 1. name, 2. message
// //error
// try{
//     throw new Error("This is an ERROR")
// }catch(error){
//     console.log(error.name)
//     console.log(error.message)
// }
// //referance error
// try{
//     throw new ReferenceError("This is a referance ERROR")
// }catch(error){
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)    //normal view of error
// }

// //normal example
// try{
//     let age = prompt("Enter your age : ")
//     age = Number.parseInt(age)
//     if(age>120){
//         throw new ReferenceError("Error : INVALID AGE")
//     }
// }catch(error){
//     console.log(error.name)
//     console.log(error.message)
// }



//#62
//FINALLY CLAUSE

//this part of error handling always be executed after handling a chunk of code [whether it gives error or not]
//we see that if we have error in try then we catch this error in order to execute later codes of the program. But if we also face an error in our catch scope, then our later chunk of code won't execute. To execute these later codes we can use this "finally" block.
//usually we use finally block to clear our console steam after executing a program/try-catch code chunks. Beside this we also performs - 1. close file, 2. exit the loop, 3. write to the file
// try{
//     let a = 0;
//     console.log(program)
//     console.log("Program ran successfully")
// }catch(error){
//     console.log("This is an ERROR")
//     console.log(p)
// }

// finally{
//     console.log("This is inside finally block")
// }

//if we also perform "return" from a functional scope & if it has a finally scope after return statement, though finally we ran
const f = () => {
    try{
        let a = 0;
        // console.log(program)
        console.log("Program ran successfully")
        return
    }catch(error){
        console.log("This is an ERROR")
        console.log(p)
    }
    
    finally{
        console.log("This is inside finally block")
    }
}

f()