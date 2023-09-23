const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const error = require("../utils/error");
const {findUserByProperty, createNewUser} = require("./user");


const registerService = async (name, email, password) => {
    let user = await findUserByProperty('email', email);

    if(user){
        throw error("User already exists", 400);    
    }

    //hashing part using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    
    return createNewUser({name, email, password: hash});   
};

const loginService = async (email, password) => {
    const user = await findUserByProperty('email', email);
    
    if(!user){
        throw error("User doesn't exists", 400);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    
    if(!isMatch){
        throw error("User doesn't exists", 403);
    }

    const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        roles: user.roles,
        accountStatus: user.accountStatus,
    };
    
    // jwt token generation - Always login korar time e use kora lagbe

    // we use sign() method for token generation. It receives receives 3 parameters
    // 1. payload(data as string, object, etc). We will share non-confidential data here.
    // 2. secret key. It must be pass securely. Because if anyone get this data then he could login the servers pretending to be us.
    // 3. options. It is an object. We can set token expiration time here. We can also set some other options here. But we will set only expiration time here. We can set algorithms[by which our token will be generated] here. But we will use default algorithm here. 
    return jwt.sign(payload, 'MY_SECRET_KEY'); // now token generated. We can now pass token insted of user in the response bar. Anyone can see our return user values by copying the token and pasting it in jwt.io website. But, can't access to server and get data from server using this token until generated token matches with the secret key we used to generate the token.

};


module.exports = {
    registerService,
    loginService
}