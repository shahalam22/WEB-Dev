const router = require('express').Router();
const {registerController, loginController} = require('../controller/auth');

// register route
// normal browser e just get request pathano jay and dekha jay ki hocche na hocche. Kintu post method dekha jay na. Er jonno "POSTMAN" use kora lagbe. 
router.post('/register', registerController)

// login route
router.post('/login', loginController);

module.exports = router;