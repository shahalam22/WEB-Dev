require('dotenv').config('../.env');

const express = require('express')

// //setting / linking up middlewares with this app.js
// const morgan = require('morgan');  //for manual middlewares that has been created and used in app.js
// const cors = require('cors');  //for manual middlewares that has been created and used in app.js

//amra jehetu middleware.js nam er file er middleware define korechi. sekhan theke middleware import kore niye ashbo tai "morgan" & "cors" lagbe na
// calling middleware from middleware.js instead of creating them here in app.js
const middleware = require('./middleware')


// calling routes from routes.js instead of creating routes here in app.js
const routes = require('./routes')


// calling error handlers from error.js instead of creating handlers in app.js
const {notFoundHandler, errorHandler} = require('./errors');


const app = express();      


// console.log(process.env.PORT);  //it's for checking perpose that .env file works properly or not


//configuring middlewares
app.use(
    // [
    //     morgan('dev'),
    //     cors(),
    //     express.json()
    // ]
    middleware //calling middleware from middleware.js
);


// //creating routes in the app.js
// // //"/health" route must be in an application. Because when we do work with third-party api's or such things, they sends api request over this "/health" route. So, it is mandatory to have a "/health" route otherwise response against this request will provide an error. Then we will be unable to work with that third party api's.
// // app.get('/health', (_req, res) => {      //sometimes server will give error if there is any unused variable in health route. Here, "req" is an unused error. We can use "_" or "_req" except this varible to not get that error. Second one is more preferable.
// //     throw new Error('Error');
// //     res.status(200).json({message: 'Success'});
// // }) 

// //calling routes from routes.js
// app.use(routes)


// // error handlers that been created in app.js and used in app.js
// // GLOBAL ERROR HANDLING
// // creating new error handler to handle errors
// // this middleware has been created following "Error First Patter"
// app.use((_req, _res, next) => {
//     const error = new Error('Resource Not Found');
//     error.status = 404;
//     next(error);
// })
// // creating new global error handler middleware to handle errors
// // ei part er kaj ei holo jekhanei error ghotuk na keno ei middleware shei error take catch kore resolve korbe & ekta message show korbe.
// app.use((error, _req, res, _next) => {
//     if(error.status){
//         res.status(error.status).json({
//             message: error.message,
//         });
//     }

//     res.status(500).json({message: 'Something went wrong'})
// });

// calling error handlers from errors.js
app.use(notFoundHandler);
app.use(errorHandler);


module.exports = app;   // ekhane i amra ei application ta ke listen kortesi na. Tar karon holo - ekhane listen korle amra app ta test korte parbo na. Er feature gulo amra test korte parbo na karon listen korle dile eta directly server e run hobe. For testing perpose we are exporting this not listening this. Export korle amra full app ta ke pabo then full app ta ke niye sokol type test chalaya then proceed korbo.
// ei chara o in future amader jodi ei application ta 2/more protocol e chalano lage tokhon eta error dibe jodi amra ekhanei listen kori. Eta ekhan theke listen korle "http" protocol onuzayi listen korbe. Kintu socket niye kaj korle tokhon amader "ws" protocol e kaj kora lagbe. Tokhon ar eta kaj korbe na. Ei karone o amra ekhan theke listen kori nai.
// eta kon protocol e kaj korbe seta amra server.js er upor chere dilam