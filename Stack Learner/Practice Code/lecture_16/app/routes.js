// joto routes ache sob ei file e rekhe amra export kore dibo. Tai amra file e explicitly bola lagbe na
const router = require('express').Router();     // ei function ke call korle express theke get/post/etc routes jei mechanism e kaj kore oi mechanism extract hoye "router" er moddhe store hobe.
// ei router use korle amader explicitely bola lagbe na method ta ki dhoroner get/post/onno kono type, etc.

router.get('/health', (_req, res) => {      //sometimes server will give error if there is any unused variable in health route. Here, "req" is an unused error. We can use "_" or "_req" except this varible to not get that error. Second one is more preferable.
    res.status(200).json({message: 'Success'});
}) 

module.exports = router;