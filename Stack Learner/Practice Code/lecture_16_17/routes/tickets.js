const router = require('express').Router()
const db = require('../db/db')

//ekhane routing er time e /tickets chaile amra avoid korte pari karon app folder e jokhon amra route er sathe ei file ke add koreche tokhon amra default url e /tickets diye diyechi tai eta na dileo cholbe

router.get('/t/:ticketId', (req, res) => {
    const ticketId = req.params.ticketId;
    const ticket = db.findById(ticketId);
    res.status(200).json(ticket);
});
router.patch('/t/:ticketId', (req, res) => {
    const ticketId = req.params.ticketId;
    const updatedTicket = db.updateById(ticketId, req.body);
    res.status(200).json({message: 'Updated Successfully', updatedTicket});
});
router.delete('/t/:ticketId', (req, res) => {
    const ticketId = req.params.ticketId;
    db.deleteById(ticketId);
    res.status(203).send();
});

// //these three lines of code can be written as [in this type we don't chande or update route for every routes.] - 
// router.route('/tickets/t/:ticketId')
// .get(() => {})
// .patch(() => {})
// .delete(() => {})

router.get('/u/:username', (req, res) => {
    const username = req.params.username;
    const tickets = db.findByUsername(username);
    res.status(200).json(tickets);
});
router.patch('/u/:username', (req, res) => {
    const username = req.params.username;
    const tickets = db.findByUsername(username);
    for(let i=0; i<tickets.length; i++){
        db.updateById(tickets[i].id, req.body);
    }
    res.status(200).json({message: 'Updated user successfully.'});
});
router.delete('/u/:username', (req, res) => {
    const username = req.params.username;
    const tickets = db.findByUsername(username);
    for(let i=0; i<tickets.length; i++){
        db.deleteById(tickets[i].id);
    }
    res.status(200).json({message: 'Deleted user and related tickets successfully', tickets});
});

router.post('/sell', (req, res) => {
    const {username, price} = req.body;
    const ticket = db.create(username, price);
    res.status(201).json({message: 'Ticket Created Successfully', ticket});
});
router.post('/bulk', (req, res) => {
    const {username, price, quantity} = req.body;
    const tickets = db.bulkCreate(username, price, quantity);
    res.status(201).json({message: 'Bulk Ticket Created Successfully', tickets});
});
router.get('/draw', (req, res) => {
    const winnerCount = req.query.wc ?? 3;
    const winners = db.draw(winnerCount);
    res.status(200).json(winners);
});

router.get('', (req, res) => {
    const tickets = db.find();
    res.status(200).json(tickets);
});

module.exports = router;