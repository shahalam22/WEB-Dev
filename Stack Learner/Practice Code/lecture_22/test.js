// ei project er sathe ei file er kono connection nai. Eta diye just bhujbo kivabe database ke connect kora jay ekta project er sathe.

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test',{
    serverSelectionTimeoutMS: 1000,
});