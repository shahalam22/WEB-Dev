/**
 * store 10 students information
 * - name 
 * - email
 * - id
 */

//unique id generator code snippet

function uuidv4(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=> {
        const r = (Math.random()*16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

// const students = [
//     {
//         id : '71d27156-192f-4e29-8b16-4c96cdfccc2c',
//         name : 'Shah Alam',
//         email : 'abir@gmail.com'
//     },
//     {
//         id : '493bc042-be9c-447b-a207-c8d8e7448e85',
//         name : 'Hasin Ahmed',
//         email : 'hasin@gmail.com'
//     },
//     {
//         id : '8d2fb9f1-0f0a-4370-bb2f-aedb880aad0c',
//         name : 'Shuvo Karmoker',
//         email : 'shuvo@gmail.com'
//     }
// ]


// /**
//  * 1. Easily Traverse
//  * 2. Filter
//  * 3. Delete
//  * 4. Update
//  * 5. Create new one 
//  */

// //5. create new student
// //using unshift - O(n)


// //using push - O(1)
// students.push({
//     id : uuidv4(),
//     name : 'Sazid Mahin',
//     email : 'sazid@gmail.com'
// })


// //4. Update data - O(n)

// const idTopdate = '8d2fb9f1-0f0a-4370-bb2f-aedb880aad0c';
// const updateData = {
//     name : 'Habiba akter',
//     email: 'habiba@gmail.com'
// }

// const updatedIndex = students.findIndex((item)=> item.id === idTopdate)

// students[updatedIndex] = {
//     ...students[updatedIndex],
//     ...updateData
// }

// console.log('One item updated');
// console.log(students)


// //Delete - O(n)

// students.splice(updatedIndex, 1)
// console.log('One item deleted');
// console.log(students)


// //Traverse - O(n)

// //for in loop prints index number | for of loop prints actual value from the array
// for(let x of students){
//     console.log(x);
// }


/* Above we see how we can operate mostly used tasks over an array */
/* below we will see how we can do these operations in object */


// const students = {
//     '71d27156-192f-4e29-8b16-4c96cdfccc2c': {
//         id : '71d27156-192f-4e29-8b16-4c96cdfccc2c',
//         name : 'Shah Alam',
//         email : 'abir@gmail.com'
//     },
//     '493bc042-be9c-447b-a207-c8d8e7448e85': {
//         id : '493bc042-be9c-447b-a207-c8d8e7448e85',
//         name : 'Hasin Ahmed',
//         email : 'hasin@gmail.com'
//     },
//     '8d2fb9f1-0f0a-4370-bb2f-aedb880aad0c': {
//         id : '8d2fb9f1-0f0a-4370-bb2f-aedb880aad0c',
//         name : 'Shuvo Karmoker',
//         email : 'shuvo@gmail.com'
//     }
// }

// //add element - O(1)
// const std = {
//     id : uuidv4(),
//     name: "Feroz Khan",
//     email: "feroz@gmail.com"
// }

// students[std.id] = std

// //update element - O(1)
// const idTopdate = '8d2fb9f1-0f0a-4370-bb2f-aedb880aad0c'
// const std2 = {
//     name: 'HM Azizul',
//     email: "azizul@gmail.com"
// }

// students[idTopdate] = {
//     ...students[idTopdate],
//     ...std2
// }

// //delete element - O(1)
// delete students[idTopdate]

// //get element - O(1)
// // console.log(students['493bc042-be9c-447b-a207-c8d8e7448e85']);

// //traversing object
// Object.keys(students).forEach((key) => {
//     console.log(students[key]);
// });
// //or
// Object.values(students).forEach((student)=>{
//     console.log(student.name);
// })

// // console.log(students);


// /*difference between Array time & Object Time*/

// const arr = []
// const arrToObj = {}

// for(let i=0; i<5000000; i++){
//     const o = {
//         id: i,
//         value: i
//     }
//     arr.push(o)
//     arrToObj[i] = o
// }

// //for array
// console.time('Find')
// let id = 4999999
// const obj = arr.find((item) => item.id === id)
// obj.value = 555
// console.timeEnd('Find')

// //for Object
// console.time('Obj')
// arrToObj[id].value = 999
// console.timeEnd('Obj')



// //  MAP - ekta data theke map korle oi data r clone crete hoy. [clone ta hoy new dataset niye create hoy nahole ager dataset niyei create hoy]

// const numbers = [1,2,3]
// const str = numbers.map((v) => v)   //here we can also use "v.toString()"/"{}"/anything else in the world
// console.log(str);


// //  FILTER - ekta specific type er data filter kore ber kora

// const numbers2 = [1,2,3,4,false,'', true, NaN, 5,6]
// const str2 = numbers2.filter((v) => typeof v === 'number')
// console.log(str2);
// const str3 = numbers2.filter((v) => v)     //this just returns true values
// console.log(str3);
// const str4 = numbers2.filter((v) => !v)    //this just returns false values
// console.log(str4);


// //  REDUCE - this is way more powerful than map & filter. We can do traversal operation using reduce as we did using MAP & FILTER - Map & Filter just returns resulting array. But Reduce returns any of the possible dataset we have in javascript [number, array, object, string, etc]

// /*Structure of reduce function - 
//     X.reduce((accumulator, current) => {
        
//         ...code
//         ...code
//         ...code

//         return accumulator
//     }, initial value of accumulator)

// */

// //suppose we want output of all the values of numbers2 in a string - '1234falsetrueNaN56'

// let result = numbers2.reduce((acc, cur) => {
//     acc += cur.toString()
//     return acc
// }, '')

// console.log(result);

// result = numbers2.reduce((acc, cur) => {    //as we entered in it we performed map 
//     if(cur){        //here we performed filter
//         acc.push(cur.toString())
//     }
//     return acc
// }, [])

// console.log(result);

// //reduce function 
// function myReduce(array, cb, init){
//     let acc = init
//     for(let i=0; i<array.length; i++){
//         acc = cb(acc, array[i], i, array)
//     }
//     return acc
// }

// const sum = myReduce([1,2,3,4], (a,b) => (a+b), 0)

// console.log(sum);

// const result = myReduce([1,2,3,'',false,NaN,false,4,5,NaN,6], (acc,cur)=>{
//                 if(cur){
//                     acc.push(cur*cur)
//                 }
//                 return acc
//             }, [])

// console.log(result);



// /*Final example of above operation*/
// /*we have to install axios to perform this code - lecture_6_time_2:35:31*/

// const axios = require('axios').default;
// const url = "https://jsonplaceholder.typicode.com/posts";

// async function getData(){
//     const {data} = await axios.get(url);

//     // // This is using MAP - This will return an Array
    
//     // const result = data.slice(0, 10).map((item) => {
//     //     return {
//     //         userID: item.userId,
//     //         id: item.id,
//     //         title: item.title,
//     //     };
//     // });

//     // This is using REDUCE - This will return an Object

//     const result = data.slice(0,10).reduce((acc, cur) => {
//         acc[cur.id] = {...cur};
//         delete acc[cur.id].body;
//         return acc;
//     }, {});
//     return result;
// }

// getData().then((data) => console.log(data)).catch((e) => console.log(e));



/*Array to making groups*/

const names = [
    'ayman',
    'abu rayhan',
    'anik',
    'elius emon',
    'engr sabbir',
    'fahim faisal',
    'feroz khan',
    'habib',
    'hm azizul',
    'hridoy saha',
    'jahid hasan',
    'johir',
    'md alamin',
    'md ashraful',
    'md arafatul',
    'parvez'
];

/* expected outcome
    a.
    'ayman'
    'abu rayhan'
    'anik'
    e.
    'elius emon'
    'engr sabbir'
    f.
    'fahim faisal'
    'feroz khan'
*/

const namesGrouped = names.reduce((acc, cur) => {
    const firstLetter = cur[0].toUpperCase();
    if(firstLetter in acc){
        acc[firstLetter].push(cur);
    }else {
        acc[firstLetter] = [cur]; //if not found then creating an array inside accumulator of this key
    }
    return acc;
}, {});

// console.log(namesGrouped);

Object.keys(namesGrouped).forEach((key) => {
    console.log('----',key,'----');
    namesGrouped[key].forEach((nam) => {
        console.log('',nam);
    });
    console.log('');
})