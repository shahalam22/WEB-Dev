const router = require('express').Router(); 
const {getAttendence, getAttendenceStatus} = require('../controllers/studentAttendence'); 

router.get('/status', getAttendenceStatus)
router.get('/:id', getAttendence)

module.exports = router;