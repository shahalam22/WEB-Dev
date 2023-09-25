const User = require('../models/User');
const userService = require('../services/user');
const authServices = require('../services/auth');
const error = require('../utils/error');


const getUsers = async (req, res, next) => {
    /**
     * todo: filter, sort, select, pagination
     */
    try{
        const users = await userService.findUsers();
        return res.status(200).json({users});

    }catch(err){
        next(err);
    }
}


const getUserById = async (req, res, next) => {
    const userID = req.params.userId;


    try{
        const user = await userService.findUserByProperty('_id', userID);
        
        if(!user){
            throw error("User not found", 404);
        }

        return res.status(200).json({user});

    }catch(err){
        next(err);
    }
}


const postUser = async (req, res, next) => {
    const {name, email, password, roles, accountStatus} = req.body;

    try{
        const user = await authServices.registerService(name, email, password, roles, accountStatus);
        return res.status(201).json({user}); 
    }catch(err){
        next(err);
    }
}


const putUserById = (req, res, next) => {}


const patchUserById = (req, res, next) => {}


const deleteUserById = (req, res, next) => {}


module.exports = {
    getUsers,
    getUserById,
    postUser,
    putUserById,
    patchUserById,
    deleteUserById
}