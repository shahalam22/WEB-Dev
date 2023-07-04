//CWH JS #86
//DESTRUCTURING using SPREAD



//destructuring - this assignment is used to unpack values from one array or properties from object into distinct variables
let arr = [1,2]
let [a,b] = arr

// //traditional method to do it is -
// let a = arr[0]
// let b = arr[1]

console.log(a)
console.log(b)

//this won't give any error
let arr2 = [1,2,3,4]
let [c,d,e] = arr2
console.log(c,d,e)

//this will give error
let arr3 = [1,2,3]
let [f,g,h,i] = arr3
console.log(f,g,h,i)

//we can use ...rest
let arr4 = [1,2,3,4,5,6]
let [j,k, ...rest] = arr4
console.log(j, k, rest)

//if we want to skip some values from array/object, then
let arr5 = [1,2,3,4,5,6,7,8,9]
let [l, , , , ...rest1] = arr5
console.log(l, rest1)       //2,3,4 are skipped


//for object - inside variable name and outside variable name must be same. Otherwise this won't work
let obj1 = {
    m: 1,
    n: 2
}
let {m, n} = obj1
console.log(m, n)


//spread syntax - using spread syntax we can convert array to object
let arr6 = [5,6,7]
let obj2 = {...arr6}
console.log(obj2)

//where we use this
function sum(a,b,c){
    return a+b+c
}
console.log(sum(...arr6))

//example
let obj3 = {
    name: 'Abir',
    city: 'Narayangonj',
    address: 'XYZ'
}

console.log({...obj3})

//this will change the name and everything else as it was
console.log({...obj3, name: 'Alo'})