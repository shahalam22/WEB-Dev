// /* ASYNCHRONOUS PROGRAMMING */

// /*
//  - Asynchronous programming
//  - Event loop - jei loop program er sokol task ke operate kore one by one
//  - Ways we can handle asynchronous tasks
//  - Callback
//  - Promise
//  - Async Await
//  - Async Iterator
//  - Async Generator
// */

// //non-blocking i/o. Parallel execution kora jay asynchronous programming er maddhome

// //ekta program er sokol synchronous kaj sesh korbe ar maje jei asynchronous statement ashbe tader queue te pathabe. Synchronous er sob kaj sesh e asynchronous er kaj-gulo kora shuru korbe
// function main(){
//     setTimeout(()=>{
//         test();
//         console.log('Print last');
//     }, 10);
    
//     setTimeout(()=>{
//         console.log('Print last');
//     }, 0);

//     test();

// }

// function test(){
//     console.log('This is Test');
// }

// main();     //code flow - main() -> 1st setTimeOut -> move 1st setTimeout to queue -> 2nd setTimeOut -> move 2nd setTimeout to queue -> executes test -> executes 1st one from queue -> executes 2nd one from queue

// console.log();

// /*Promise*/

// const promise = new Promise((resolve, reject) => {
//     if(resolve){
//         resolve("Successful")
//     }else {
//         reject(new Error("This is an Error"))
//     }
// });

// promise.catch((e) => {
//     console.log(e);
// }).then((value) => {
//     console.log(value);
// })

// //another example
// function wait(ms){
//     const promise = new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
//     return promise;
// }

// // const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(1000).then(() => {
//     console.log("This is after 1000ms");
// })

// wait(2000).then(() => {
//     console.log("This is after 2000ms");
// })

// wait(3000).then(() => {
//     console.log("This is after 3000ms");
// })

// //hardest exmaple
// /**we have to do this - user e jabo -> tar first post e jabo -> tar first comment e jabo -> first commenter er id te jabo
//  * /user?username=[username]
//  * /posts?user_if=[user_id]
//  * /comments?post_id=[post_id]
//  * /user?username=[username]
//  */

// const get = (url) => new Promise.resolve();

// get(`/user?username=shahalam`)
//     .then(user => {
//         return get(`/posts?user_if=${user.id}`)
//     })
//     .then(posts => {
//         const latestPost = posts[0]
//         return get(`/comments?post_id=${latestPost.id}`)
//     })
//     .then(comments => {
//         const latestComment = comments[0]
//         get(`/user?username=${latestComment.username}`)
//     })
//     .then(user => {
//         console.log(user);
//     })
//     .catch(() => {
//         console.log("This is an error");
//     })


/* ASYNC - AWAIT */

//async keyeord thakle oi function must ekta promise return korbe. await e jei funtion use korbo oitao jeno ekta promise return kore emn function hote hobe
//solution of previoous problem using async-await

const get = (url) => new Promise.resolve();

async function getUserName(username){
    try {
        const mainUser = await get(`/user?username=${username}`);
        const posts = await get(`/posts?user_if=${mainUser.id}`);
        const comments = await get(`/comments?post_id=${posts[0].id}`);
        const user = await get(`/users?username=${comments[0].username}`);
        console.log(user);
    } catch (e) {
        console.log(e);
    }
}

getUserName('Modon')