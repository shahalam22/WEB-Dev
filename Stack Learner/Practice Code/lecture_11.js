// /** Table of Content
//  * Iterator & Generator
//  * For of Loop
//  * Async Iterator & Generator
//  * Github Collaboration
//  * Project Requirement
//  */

// // Iterate - ekta array / object k first to last one by one iterate kora
// // Iterable - jar upor iterate kora somvob
// // Iterator - it is a object which works over iterable and through which we can know weather this iterable has next value or access present value

// const arr = [1,2,3,4]
// const arrIterator = arr[Symbol.iterator]()

// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log();

// //example 2 - making an object iterator
// const range = {
//     start: 0,
//     stop: 100,
//     step: 5,
// };

// //to make this iterable we have to add [Symbol.iterator] and return a function [this function will define how iterator will work]
// range[Symbol.iterator] = function(){
//     let current = this.start;
//     const stop = this.stop;
//     const step = this.step;
//     return {
//         next(){
//             const obj = {
//                 value: current,
//                 done: current>stop,
//             };    
//             current += step;
//             return obj;
//         }
//     }
// }

// const rangeIterator = range[Symbol.iterator]();

// console.log(rangeIterator.next());
// console.log(rangeIterator.next());
// console.log(rangeIterator.next());
// console.log(rangeIterator.next());

// //also can do this
// for(let v of range){
//     console.log(v);
// }

// /* GENERATOR - is a thiing like async-await for promise. Generator always returns an ITERATOR as async-await always returns a Promise */
// //previous range using generator
// function * range(start=0, stop=100, step=5){
//     for(let i=start; i<=stop; i+=step){
//         yield i
//     }
// }

// const rangeIt = range();
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());

// // another example 
// function * generateId(){
//     let index = 1;
//     while(true){
//         yield index++;
//     }
// }

// const userId = generateId()
// const productId = generateId()

// console.log("User : ", userId.next().value);
// console.log("User : ", userId.next().value);
// console.log("User : ", userId.next().value);
// console.log("User : ", userId.next().value);
// console.log();

// console.log("Product : ", productId.next().value);
// console.log("Product : ", productId.next().value);
// console.log("Product : ", productId.next().value);
// console.log("Product : ", productId.next().value);
// console.log("Product : ", productId.next().value);
// console.log("Product : ", productId.next().value);
// console.log("Product : ", productId.next().value);
// console.log("Product : ", productId.next().value);
// console.log();


// /* Async Iterator & Async Generator - to iterate over asynchronous data */

// const axios = require(`axios`).default

// //fetching data from server
// async function getUsers(){
//     const url =  'https://jsonplaceholder.typicode.com/users';
//     const {data: users} = await axios.get(url);
//     return users;
// }

// async function * getPostByUser(users){
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     for(let i=0; i<users.length; i++){
//         const {data: posts} = await axios.get(`${url}?userId`)
//         yield posts
//     }
// }

// //manipulating fatched data from server
// getUsers().then(async (users) => {
//     // const userIterator = await getPostByUser(users);
//     // console.log((await userIterator.next()).value);     //this will return posts of 1st user
//     // await userIterator.next();
//     // await userIterator.next();
//     // console.log((await userIterator.next()).value);     //this will return posts of 4th user

//     // // if we want to see all posts of all user
//     for await (let v of getPostByUser(users)){
//         console.log(v);
//     }
// }).catch((e) => {
//     console.log(e);
// })

// avobe, we are fetching user, then fetching posts. another way to directly retrive posts from there directly is -
const axios = require(`axios`).default

//fetching data from server
async function getUsers(){
    const url =  'https://jsonplaceholder.typicode.com/users';
    const {data: users} = await axios.get(url);
    return users.map((user)=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
    });
}

(async ()  => {
    const posts = await getUsers();
    for await (let v of users){
        console.log(v.data.map((post) => post.title));
    }
})();