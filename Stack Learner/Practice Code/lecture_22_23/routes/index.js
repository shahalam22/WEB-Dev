// eita create kora hoyeche ei "routes" folder e joto routers ache sobaike assemble korar jonno

// assemble bolte jodi amader route er age aro kichu a/b/c emn slashed route thake tahole individually prottek router e a/b/c na likhe evabe handle kora better

const router = require('express').Router(); 


const authRoutes = require('./auth');

router.use('/auth', authRoutes);

module.exports = router;