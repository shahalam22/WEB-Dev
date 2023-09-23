const express = require('express');
const connectDB = require('./db');
const authenticate = require('./middlewares/authenticate');

const routes = require('./routes');

const app = express();

// data amra request body theke directly pabo na. Data request body theke paite hoile amader ei body ke age parse kore nite hobe.
// age ekta third-party middleware use kora lagto. Kintu ekhon ar use kora lage na. Ekhn body parse korte amra niche-r ,ethod follow korbo
app.use(express.json());

app.use(routes);


// creationg a private route to see actually how login system works with jwt
// we will check if request has a valid token or not. If valid token then we will send the data. If not then we will send error message.
app.get('/private',authenticate, async (req,res) => {
    // console.log('I\'m the user', req.user);
    return res(200).json({message: "This is a private route"});
        
})

// public route
app.get('/public', (req, res) => {
    return res.status(200).json({message: "This is a public route"});
})


app.get('/', (_, res)=>{
    const obj = {
        name: 'Ayman',
        email: 'ayman@example.com',
    };
    res.json(obj);
})


// server error handling
app.use((err, req, res, next) => {
    // console.log(err);
    const message = err.message? err.message : "Server Error Occured";
    const status = err.status? err.status : 500;
    res.status(status).json({message});
})


// server running thakleo database connect kora jabe || na thakleo database connect kora jabe

connectDB('mongodb://localhost:27017/attendance-db').then(() => {
    console.log("Database connected");
    app.listen(4000, ()=>{
        console.log("I am listening on port 4000");
    })
}).catch((err) => {
    console.log(err);
});