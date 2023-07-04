//CWH JS  #68
//COOKIES - small strings of data that are used to store in the browser like:- username, email, etc


//document.cookie = "key = value"       - this is cookie set option
//it is used to be set as key-value pair
console.log(document.cookie)
document.cookie = "name=abir1439"
console.log(document.cookie)
document.cookie = "name1=hasin1415"
document.cookie = "name2=shuvo1431"
console.log(document.cookie)

//here new "document.cookie" always adds new cookie to previous cookies. It doens't overwrite the new cookie over the old cookies. It overwrites new cookie over older cookie only if their key is same

// let key = prompt("Enter key : ")
// let value = prompt("Enter value : ")

// document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`

//if we take special characters as key or value then it won't work. To take special character as key or value we use encodeURIComponent
//"encodeURIComponent" this will save key & value by encoding. We can see the actual value[special character key/value] using "decodeURIComponent"

//decodeURIComponent("a%3B%3B") for key "a;;"

//we can set one pair from multiple key-value options [which are separated by semicolon]
document.cookie = "name21=sejuti; roll=1420"
//we can save key-value of username, path[in which they will be available], expire date, etc
//these key-value must be under 4kb
//how much cookie i can save in a domain it depends on browser