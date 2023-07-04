//CWH JS  #66  #67
//fetch api data



//fetch er maddhome amra api theke data ani. 1st .then diye fetched data k json e convert kore return kori. 2nd .then er moddhe json() k finally resolve kora hoy.
//1st .then e amra "response.status" diye data kon obostha te ache ta jante pari [200-299 er moddhe value[status code] return korle it's ok]. "response.ok" diye data 100% fetched kina jante pari [true/false return kore]
/*syntax
    let p = fetch(url, [options])
    p.then((response)=>{
        return response.json()
    }).then((response)=>{
        resolve(response)
    })
*/

let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    return response.json()
    /*
    here we also can return text by "response.text()"
    here we also can return form data by "response.formData()"
    here we also can return blog format by "response.blog()"

    we can use only one method of these 4 in this scope
    */

    /*there are 2 types of headers. 1. response header, 2. request header
        response header amader request er upor base kore api theke ashe. So, we can print these headers using "response.headers"
        request header amra create kori request pathanor time e. We have to create these types of header
        creating request header - 
        let reqHead = fetch(url, {
            headers: {
                Authentication: 'secured'
            }
        })
    
    */
}).then((response)=>{
    console.log(response)
})



//#67
//POST REQUEST
//there are 2 types of request to send to the server to call data. 1. get request, 2. post request
//get request has limits that how much data request we can sent to server using url. But post has not that limit.
/*syntax
    let a = fetch('url', {post request})
*/
//post
const createTodo = async(demo) => {
    let options = {
        method: 'POST',
        headers: {
            "Content-type": "applcation/json"
        },
        body: JSON.stringify(demo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

//get
const getTodo = async(id)=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts' + id)
    let r = response.json()
    return r
}

const mainFunc = async() => {
    let demo = {
        title: 'foo',
        body: 'ami',
        userId: 1100,
    }
    let todo = await createTodo(demo)
    console.log(todo)
    console.log(await getTodo(5))
}

mainFunc()