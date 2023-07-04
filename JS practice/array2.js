//codeWithHarry 19,20

//for each loop for array
/* syntax
    variable_name.foreach((iterator variable) => {codes...})
*/
let num = [5,6,7,8,9];
num.forEach((element) => {
    console.log(element);
})

//making array from other values
let nam = Array.from("Abir");
console.log(nam);

//for...of loop - gives the values
for(let i of num){
    console.log(i);
}

//for...in loop - gives the keys[index]
for(let j in num){
    console.log(j);
}
//this will print values
for(let j in num){
    console.log(num[j]);
}

//map method - this doesn't modifies existing original array but creates new array
/* SYNTAX
    num.map((value, index, array) => {codes...})
*/
let a = num.map((value, index, array)=>{    //ekhane amader monmoto parameter dite pari. 1ta/2ta/3ta jai dei na ken tai shoi
    console.log(value, index, array);
    return value+index;
})
console.log(a);
console.log(num);

//difference between forEach() & map() is that forEach() performs operation over an existing array. whereas, map() executes operations over an array and also returns a array after performing operation


//filter method - this doesn't modifies our original array but can create new array
/* SYNTAX
    a.filter((val) => {function for filtering}); this returns values whose satisfies filtering functions and makes an array of them
*/
let b = a.filter((val) => {
    return val<10; 
})
console.log(b, a);


//reduce method - takes values of index 0 & 1, add them, takes addValue & value of next index.---continues till last index. Thus reduce methods gives total sum of the array elements
let c = a.reduce((val1, val2) => {
    return val1 + val2;
})
//returns sum of all the elements of the array
console.log(c);
