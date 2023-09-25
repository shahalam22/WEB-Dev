const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function authenticate(req, res, next){
    try{
        let token = req.headers.authorization;
        if(!token){
            return res.status(401).json({message:"Unathorized access"});
        }

        token = token.split(' ')[1]; // we will get token in the format of "Bearer token". So, we will split the token and get the token only. 
        // by this line we could verify our token with the secret key of our server. If token is valid then we will get the user data. If not then we will get error.
        const decoded = jwt.verify(token, 'MY_SECRET_KEY');
        const user = await User.findById(decoded._id);

        if(!user){
            return res.status(401).json({message: "Invalid User Token"});
        }

        req.user = user;
        next();

    }catch(err){
        return res.status(400).json({message: "Invalid User Token"})
    }
}

module.exports = authenticate;