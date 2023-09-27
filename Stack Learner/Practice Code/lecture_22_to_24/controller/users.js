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


const putUserById = async (req, res, next) => {
    const userID = req.params.userId;
    const {name, email, roles, accountStatus} = req.body;

    try{
        const user = await userService.updateUser(userID, {name, email, roles, accountStatus});

        if(!user){
            throw error("User not found", 404);
        }

        return res.status(200).json({user});
    }catch(err){
        next(err);
    }
}


const patchUserById = async (req, res, next) => {
    const userID = req.params.userId;
    const {name, roles, accountStatus} = req.body;

    try{
        const user = await userService.findUserByProperty('_id', userID);

        if(!user){
            throw error("User not found", 404);
        }

        user.name = name ?? user.name;
        user.roles = roles ?? user.roles;
        user.accountStatus = accountStatus ?? user.accountStatus;

        await user.save();
        return status(200).json({user});
        
    }catch(err){
        next(err);
    }
}


const deleteUserById = async (req, res, next) => {
    const userID = req.params.userId; 
    try{
        const user = await userService.findUserByProperty('_id', userID);
        
        if(!user){
            throw error("User not found", 404);
        }

        await user.remove();
        return res.status(203).send();
    }catch(err){
        next(err);
    }
}


module.exports = {
    getUsers,
    getUserById,
    postUser,
    putUserById,
    patchUserById,
    deleteUserById
}