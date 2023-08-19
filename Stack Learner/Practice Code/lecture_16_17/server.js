require('dotenv').config();

const http = require('http')
const app = require('./app/app');

const server = http.createServer(app);      //http protocol diye "app" ke server banano holo. Eita ekhn http protocol onuzayi listen kore request & response transfer korbe.

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {     // ekhane port 8000 dite hobe emn kono issue nai. eta pc nije thekei fix kore. eta ekta varible value. so, amader fix kore deyar dorkar nai most of the case.
    console.log(`Server  listening on PORT ${PORT}.`);
})

// "dotenv" holo ekta file. Jei file e amra amader environment variable e jei data gulo rakha dorkar oi data gulo rakhi. Then ei data gulo amra amader application e use kori. Pore server e application deploy korle oikhane 1.terminal diye amra ei datagulo diye dite pari or 2.server e "dotenv" nam er file create kore data oikhane save kore rakhte pari.
// .env file git ignore kore. default.env te git trace rakhe
