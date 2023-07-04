//CWH JS #52 #53


//INTRODUCTION TO CALLBACKS
//this is must if you try to run prompt in your console
// const prompt = require('prompt-sync')();


//synchronous programming - line by line execution of code

// let a = prompt('What is your name?');
// let b = prompt('What is your age?');
// let c = prompt('What is your favorite color?');
// console.log(a+" is "+b+" years old and has "+c+" favorite color.");


//asynchronous programming - all the codes executes at a time
// console.log('Start');
// setTimeout(function(){
//     console.log("Hey I am good.");
// }, 3000);
// console.log('End');


//we can handle error easily. we find errors through callback function
//CALLBACKS - see "loadScript" e argument hisebe ekta function[callback] jabe. amader loadScript er kaj sesh holei kebol ei function call hobe else hobe na. Function er eirokom call ei callback
function loadScript(src, callback){
    let script = document.createElement('script');
    script.src = src;

    script.unload = function(){
        console.log("Loaded script with SRC: "+src);
        callback(null);
    }

    //if we got some error over this - then we have to handle these error
    script.onerror = function(){
        console.log("Error loading script with SRC");
        callback(new Error("Script not found"));
    }

    document.body.appendChild(script);      //if everything allright then this line executes as adding script in the body of HTML
}

function hello(error){
    if(error){
        console.log(error);
        return;
    }
    alert("Everything alright");
}

loadScript("...", hello);

//these callback functions can also take arguments.


//but there is a great drawback with these callback function if we directly executes this, then sometimes these functions output would mess up all the code. From above example, if somehow we pass "true" instead of "null" as hello's error argument. Then this will always show error though out code is right
//to get rid of these unexpected messed up situation we use PROMISES [mainly] CALLBACK HELL & PYRAMID OF DOM [it also has problems]. we use these also for make single code for all the childs of body that we have to append.


//CALLBACK HELL or PYRAMID OF DOM 
//ekhane amra nested process e ekta action successful hole kono msg na dekhaye next action perform korchi...ar eita cholbe amader last action porjonto. Jei action e problem korbe just oi action er error ei dibe amader kache
//but this process also generates non-readable code. So, that's why we use PROMISSES

// loadScript("...1...", function goodMorning(error, src){
//     if(error){
//         console.log(error);
//         sendAuthorityMessage();
//         return;
//     }
//     loadScript("...2...", function goodMorning(error, src){
//         if(error){
//             console.log(error);
//             sendAuthorityMessage();
//             return;
//         }
//         loadScript("...3...", function goodMorning(error, src){
//             if(error){
//                 console.log(error);
//                 sendAuthorityMessage();
//                 return;
//             }
//             loadScript("...4...", function goodMorning(error, src){
//                 if(error){
//                     console.log(error);
//                     sendAuthorityMessage();
//                     return;
//                 }
//                 //and so many nested action.....
//             })
//         })
//     })
// })