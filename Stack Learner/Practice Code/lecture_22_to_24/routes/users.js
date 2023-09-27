const router = require('express').Router();
const userController = require('../controller/users');


//long route gula upore rakha lagbe. otherwise prothome short route ta match kore kaj execute kore felbe. Amader intended route e ar jabei na.


/**
 * Get user by if or email
 *      to find user by id or email we have to define user parameters. format ":parameter_name". These are varible that always replaces by the actual userID or userEmail.
 * @method GET
*/
router.get('/:userId', userController.getUserById);


/**
 * Update user by if or email
 *      to find user by id or email we have to define user parameters. format ":parameter_name". These are varible that always replaces by the actual userID or userEmail.
 * @method PUT
*/
router.put('/:userId', userController.putUserById); 
// "PUT" db te user thakle user er sokol attribute update kore dibe na thakle create korbe user. "PATCH" jokhon amra sure user achei tokhon user er 1/ek er beshi attribute update korte parbo. 

/**
 * Update user by if or email
 *      to find user by id or email we have to define user parameters. format ":parameter_name". These are varible that always replaces by the actual userID or userEmail.
 * @method PATCH
*/
router.patch('/:userId', userController.patchUserById);


/**
 * Delete user by if or email
 *      to find user by id or email we have to define user parameters. format ":parameter_name". These are varible that always replaces by the actual userID or userEmail.
 * @method DELETE
*/
router.delete('/:userId', userController.deleteUserById);


/**
 * Get all users, include
 *  - filter
 *  - pagination
 *  - sorting
 *  - select properties
 * @route /api/users?sort-["by","name"]
 * @method GET
 * @visibility Private
*/
router.get('/', userController.getUsers);


/**
 * create a new user
*/
router.post('/', userController.postUser);



module.exports = router;