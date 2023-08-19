const Ticket = require('../model/Ticket')

class Mydb {
    constructor(){
        this.tickets = []
    }

/* Amra jodi kono parameter pass kori ei method gulate tahole compiler eta dhorte parbe na ashole oi parameter ki type er. To get rid of this problem we can use typescript. Otherwise to develop in js we can use jsDOCs. Through this jsDOCs we can just comment out about the parameter type and this will be conveyed to the code [it works as the alternative of typescript] */

    /**
     * @param {string} username
     * @param {number} price
     * @returns {Ticket} returns a ticket object
     */
    //create new ticket
    create(username, price){
        const ticket = new Ticket(username, price);
        this.tickets.push(ticket)
        return ticket
    }

    /**
     * create multiple ticket for a single user
     * @param {string} username
     * @param {number} price
     * @param {number} quantity
     * @returns {Array<Ticket>}
     */
    //sell multiple ticket
    bulkCreate(username, price, quantity){
        const result = [];
        for(let i=0; i<quantity; i++){
            const ticket = this.create(username, price);
            result.push(ticket);
        }
        return result;
    }

    /**
     * return all available tickets
     */
    //return all tickets
    find(){
        return this.tickets;
    }

    /**
     * find ticket by ticket Id
     * @param {string} ticketId
     * @returns {Ticket} 
     */
    //return single ticket
    findById(ticketId){
        const ticket = this.tickets.find(
            /**
             * @param {Ticket} ticket 
             */
            (ticket) => ticket.id === ticketId
        );
        return ticket;
    }

    /**
     * find all tickets for a given user
     * @param {string} username
     * @returns {Array<Ticket>}
     */
    findByUsername(username){
        const tickets = this.tickets.filter(
            /**
             * @param {Ticket} ticket
             */
            (ticket) => ticket.username === username
        );
        return tickets;
    }

    /**
     * 
     * @param {string} ticketId 
     * @param {{username: string, price: number}} ticketBody
     * @returns {Ticket}
     */
    //update ticket info
    updateById(ticketId, ticketBody){
        const ticket = this.findById(ticketId);
        ticket.username = ticketBody.username ?? ticket.username;
        ticket.price = ticketBody.price ?? ticket.price;
        ticket.updatedAt = new Date();

        return ticket;
    }

    /**
     * @param {string} ticketId
     */
    //delete ticket
    deleteById(ticketId){
        const index = this.tickets.findIndex(
            /**
             * @param {Ticket} ticket 
             */
            (ticket) => ticket.id === ticketId
        );
        if(index != -1){
            this.tickets.splice(index, 1);
            return true;
        }else {
            return false;
        }
    }

    /**
     * @param {number} winnerCount 
     * @returns {Array<Ticket>}
     */
    //raffle draw
    draw(winnerCount){
        let indexes = new Array(winnerCount);
        let index = 0;
        for(let i=0; index<winnerCount; i++){
            let winnerIndex = Math.floor(Math.random()*this.tickets.length);
            if(!indexes.includes(winnerIndex)){
                indexes[index++] = winnerIndex;
            }
        }
        //mapping winners by the index
        const winners = indexes.map((index) => this.tickets[index]);
        return winners;
    }
}

const myDB = new Mydb();    //ekhane amra ekta "myDB" object banaye then export korlam direct class ta export korar bodole. Karon, jodi amra class ke export kortam tahole bahirer jekono file theke new new db banano jeto. Tokhon amader onekgula db hoye jaito ar data sob ek db te na theke multiple db te choray-chitay thakto. But amader to sob data ekta db tei rakhte hobe
module.exports = myDB;