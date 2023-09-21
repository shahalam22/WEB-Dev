const express = require('express');
const bcrypt = require('bcryptjs');
const connectDB = require('./db');
const User = require('./models/User');

const app = express();


// data amra request body theke directly pabo na. Data request body theke paite hoile amader ei body ke age parse kore nite hobe.
// age ekta third-party middleware use kora lagto. Kintu ekhon ar use kora lage na. Ekhn body parse korte amra niche-r ,ethod follow korbo
app.use(express.json());

// register route
// normal browser e just get request pathano jay and dekha jay ki hocche na hocche. Kintu post method dekha jay na. Er jonno "POSTMAN" use kora lagbe. 
app.post('/register', async (req, res, next)=>{
/**request er sathe input ashte pare jekhane jekhane :
 * req body - form theke je data input neya hoy
 * req params
 * req query
 * req header
 * req cookies
 */

    // console.log(req.body);

    const {name, email, password} = req.body;

    // data validation
    if(!name || !email || !password){
        return res.status(400).json({message: "Invalid data"});   //user theke error hole seta 400 er ghorer status code
    }

    // eta error first controller. karon ekhane amra age error handle kortesi then kaj er code e jacchi

    // data val idate hole ki korbo ta niche deya

    // data validate hole amader dekhte hobe je ei email ta database e ache kina. Jodi thake tahole error dite hobe jodi na thake tahole database e save korte hobe
    // ebar email khuje pabo kivabe?? Database thake ei data. Database er sathe communicate kore mongoose diye banano model. Mongoose er kaj model banano porjontoi.
    // jehetu database er sathe only model communicate kore tai. Ekta database e kono req.body er data ache kina ta check kora jabe ei model er maddhomei.
    // prothomei, Model ke include korte hobe ei file e. Then model ke class consider kore search dite hobe. 
    try{
        let user = await User.findOne({email})

        if(user){
            return res.status(400).json({message: "User already exists"});
        }

        user = new User({name, email, password});

        //hashing part using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        //hashing part ends

        user.password = hash;
        
        await user.save();

        return res.status(201).json({message: "User created successfully"});


    }catch(err){
        next(err);
    }
})


// login route
app.post('/login', async (req, res, next)=>{
    const {email, password} = req.body;

    try{
        const user = new User.findOne({email});
        if(!user){
            return res.status(400).json({message: "User not found"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid credentials  "})
        }

        delete user._doc.password;
        return res.status(200).json({message: "Login Successfull", user});
    }catch(err){
        next(err);
    }
});


app.get('/', (_, res)=>{
    const obj = {
        name: 'Ayman',
        email: 'ayman@example.com',
    };
    res.json(obj);
})


// server error handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({message: "Server Error Occured"})
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