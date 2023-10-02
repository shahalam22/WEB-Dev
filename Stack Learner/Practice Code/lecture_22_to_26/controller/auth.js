const {registerService, loginService} = require('../services/auth');

const registerController = async (req, res, next)=>{
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
        const user = await registerService(name, email, password);
        return res.status(201).json({message: "User created successfully"});
    }catch(err){
        next(err);
    }
}


const loginController = async (req, res, next)=>{
    const {email, password} = req.body;

    try{
        const token = await loginService(email, password);
        return res.status(200).json({message: "Login Successfull", token});
    }catch(err){
        next(err);
    }
}


module.exports = {
    loginController,
    registerController
}