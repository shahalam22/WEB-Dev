//CWH JS #49

// // question 3 ans
// document.getElementById('google').addEventListener('click', function(){
//     window.location = "https://www.google.com";
//     window.focus();
// })
// document.getElementById('facebook').addEventListener('click', function(){
//     window.location = "https://www.facebook.com";
//     window.focus();
// })
// document.getElementById('twitter').addEventListener('click', function(){
//     window.location = "https://www.twitter.com";
//     window.focus();
// })

// //question 4 ans - write a javascript program to keep fetching content of a website(every 5 second)
// setInterval(async function(){
//     let url = "https://jsonplaceholder.typicode.com/todos/1"
//     console.log(await fetchContent(url))
// }, 3000)

//question 5 answer
setInterval(async function(){
    document.getElementById('bulb').classList.toggle("bulb")
}, 100)