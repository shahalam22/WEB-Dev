const router = require('express').Router();
const {getEnable, getDisable} = require('../controller/adminAttendence');

 router.get('/enable', getEnable);
 router.get('/disable', getDisable);

 module.exports = router;