//Imperative traverse - jodi amra for use kore traverse kori array te - because we are declaring the initial value, ending valu, increment/decrement of loop controling variable. We also defined that what operation will occur inside loop. For these reasons it's an imperative declaretion.

const numbers =  [2,5,6,7,89,100]

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i])
// }

//when we pass a function as an argument of another funtion then we can say that container function is a call back function


//declarative form of array traversal - here we traversed an array without any internal traversal variable.

// const cb = () => {
//     console.log('Hello')
// }

// numbers.forEach(cb)

// numbers.forEach(function() {
//     console.log(arguments)  //we can see what is being passed as argument in foreach loop
// })

//inside the callback function of foreach we can take arguments only from those arguments which can be passed through foreach loop. We can see these arguments using "console.log(arguments)" inside foreach loop
//foreach loop function doesn't returns anything


// SORTING VALUE

const arr = [1,2,3,null,false,4,5,'','test',6,7]

//write only numbers in the array [in imperative way] sort array with number

// let count = 0

// for(let i=0; i<arr.length; i++){
//     if( typeof arr[i] !== 'number'){
//         let j=i
//         for(; j<arr.length-1; j++){
//             arr[j] = arr[j+1]
//         }
//         i--;
//         count++;
//     }
// }

// for(let k=0; k<arr.length-count; k++){
//     console.log(arr[k]);
// }

//write th code into declarative way

// const filteredArray = arr.filter((v) => typeof v === 'number')
// console.log(filteredArray);


//objects are mutable

const arr2 = [
    {id: 1, value: 10},
    {id: 2, value: 20},
    {id: 3, value: 30},
    {id: 4, value: 40},
    {id: 5, value: 50}
]

//  UPDATE VALUE

// const obj = arr2.find(function(v) {
//     return v.id == 4
// })
// obj.value = 400
// console.log(obj)
// console.log(arr2);

//here, main obj in array will be changed
//"find" method mutable
//filter method immutable


// DELETE VALUE

//slice -> mutable
// const index = arr2.findIndex((item) => item.id === 4)
// const arr3 = arr2.splice(index, 1)
// console.log(arr2);      //will change actual array
// console.log(arr3);      //deleted items will be there

//filter -> immutable
// const arr4 = arr2.filter((item) => item.id!=4)
// console.log(arr2);      //there will no change occure in main array
// console.log(arr4);      //this is our new array