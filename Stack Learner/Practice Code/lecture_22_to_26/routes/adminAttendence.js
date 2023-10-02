const router = require('express').Router();
const {getEnable, getStatus, getDisable} = require('../controller/adminAttendence');

router.get('/enable', getEnable);
router.get('/status', getStatus);
router.get('/disable', getDisable);

module.exports = router;