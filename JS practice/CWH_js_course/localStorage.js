//CWH JS  #69  #70
//LOCAL STORAGE



// //we can also save data/ cookies in our local storage. Thus, we won't lose our data though we lost browser connectivity or reload our browser 

// //set key-value pair into local storage
// localStorage.setItem('name', 'abir')        //to see inspect -> application -> local Storage
// localStorage.setItem('color', 'red')
// localStorage.setItem('city', 'narayangonj')
// localStorage.setItem('college', 'dhakaCollege')

// //user input data saving into local storage
// // let key = prompt("Enter key : ")
// // let value = prompt("Enter value : ")

// // localStorage.setItem(key, value)

// //get key-value pair into local storage
// let p = localStorage.getItem('name')
// console.log(p)

// //remove item - removes key-value pair according to key
// // localStorage.removeItem('color')

// //localStorage.clear() - clears full local storage
// // localStorage.clear()

// //localStorage.length - returns the length of local storage
// console.log(localStorage.length)

// //localStorage.key(index) - this returns the key that lies in the index
// console.log(localStorage.key(1))

// console.log(localStorage.getItem(localStorage.key(1)))

// //key & value of local storage must be string. if our input is not string then js engine will automatically convert the values into string

// //we can convert object to JSON string by "JSON.stringify(object)"
// //we can convert JSON string to js object by "JSON.parse(string)"



// //#70
// //SESSION STORAGE


// //session storage works similarly as local storage does. But, difference is that session storage just only saves data for one session[not permanently] like - one tab. If we close tab then our session storage also get formatted 
// //we will have only one local storage for all session, but unique session storage for every unique session[every unique tab]
// //all methods and properties are same as local storage
// sessionStorage.setItem('name', 'abir')
// sessionStorage.setItem('city', 'dhaka')
// sessionStorage.setItem('university', 'Dhaka University')


// //STORAGE METHOD
// //suppose, we want to perform any task[show alert] when any data gets reseted in the storage, to do so we use storage method
// window.onstorage = (e) => {
//     alert('Value changed')
//     console.log(e)
// }

// // localStorage.setItem('prof', 'student')
// localStorage.setItem('prof', 'developer')