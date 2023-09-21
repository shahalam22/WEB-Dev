const express = require('express');
const app = express();

app.get('/', (_, res)=>{
    const obj = {
        name: 'Ayman',
        email: 'ayman@example.com',
    };
    res.json(obj);
})


// server running thakleo database connect kora jabe || na thakleo database connect kora jabe

app.listen(4000, ()=>{
    console.log("I am listening on port 4000");
})