// eita create kora hoyeche ei "routes" folder e joto routers ache sobaike assemble korar jonno

// assemble bolte jodi amader route er age aro kichu a/b/c emn slashed route thake tahole individually prottek router e a/b/c na likhe evabe handle kora better

const router = require('express').Router(); 
const authRoutes = require('./auth');
const userRoutes = require('./users');
const adminAttendenceRoutes = require('./adminAttendence');
const studentAttendenceRoutes = require('./studentAttendence');
const authenticate = require('../middlewares/authenticate');


router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/users', authenticate, userRoutes);
router.use('/api/v1/admin/attendence', authenticate, adminAttendenceRoutes);
router.use('/api/v1/student/attendence', authenticate, studentAttendenceRoutes);


module.exports = router;