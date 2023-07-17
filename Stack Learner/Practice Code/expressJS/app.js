const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const pollController = require('./pollController')

//creating application
const app = express()

//we are expressing which template engine we are using. There is template engines names Ejs, Jade, Pug, Mustache, HandlebarsJS, Jinja2, and Blade
app.set('view engine', 'ejs')

//now we have to create a folder to store our template engines. For this application we are storing template engines in a directory named "views"

//these application function has 3 tasks and these are 1. Route handling, 2. Route controlling, 3. Working with middlewares and template engine

//we use mongoose to connect MONGODB with express application

//to use middleware we have to use app.use()
//setting up a middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// //route handling - for normal use 
// app.get('/', (req, res) => {
//     res.json({
//         message: 'I am root Route'
//     })
// })

// route handling - for rendered
app.get('/', (req, res) => {
    res.render('home')
})

// // rendering "create"
// app.get('/create', (req, res) => {
//     res.render('create')
// })

app.get('/create', pollController.createPollGetController)

app.post('/create', pollController.createPollPostController)

//if we provide localhost instead of 127.0.0.1 then it doesn't works
mongoose.connect("mongodb://127.0.0.1:27017/test", {
   useNewUrlParser: true
}).then(() => {
    app.listen(4545, () => {
        console.log("Application is ready to serve on port");
    })
}).catch((e) => {
    console.log(e);
})