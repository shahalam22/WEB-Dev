//from LECTURE-17
// working with DB and DB functions/attributes to test our created DB
const myDB = require('../db/db')

myDB.create('user 1', 10);
myDB.create('user 2', 10);
myDB.create('user 3', 10);
myDB.create('user 4', 10);
myDB.create('user 5', 10);
myDB.bulkCreate('user 6', 10, 5);
const tickets = myDB.find();
console.log('All tickets - ', tickets);
const winners = myDB.draw(3);
console.log('Winners - ', winners);

