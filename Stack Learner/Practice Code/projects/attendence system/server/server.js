const express = require('express')

const app = express()       //this app knows everything about server

//to resolve get / problem in browser we can create a get request using this app
app.get('*', (req, res) => {    // "*" for this we will get all the routes. If we use "/" then we will get this response only for root.
    // res.send('<h1>Thank you for your request</h1>')      //using send() we can send any html, js, xml, etc file as per clients request

    //creating object to pass as response
    const obj = {
        name: 'Ayman',
        email: 'ayman@example.com'
    };
    // res.send(obj);
    // res.send(JSON.stringify(obj))
    // res.json(obj)        //all of these three will provide same result. Last 2 is the proper way.

})

//app.listen(port, hostname, backlog)     //kar command e cholbe tai ekhane function akare define kora
app.listen(4000, () => {
    console.log('I am listening on port 4000');
})

// mongodb -> mongoose | sql -> sequalize | typescript + sql -> typeorm | graphql -> prisma