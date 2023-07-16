const express = require('express')

const app = express();

app.use(express.json()) //this is a middleware. if we don't use this then our post request can be done effectively.

const books = [
    {
        id: '1',
        name: 'Physics',
        price: 250
    },
    {
        id: '2',
        name: 'Chemistry',
        price: 300
    },
    {
        id: '3',
        name: 'Math',
        price: 280
    },
    {
        id: '4',
        name: 'Physics 2',
        price: 450
    },
    {
        id: '5',
        name: 'Chemistry 2',
        price: 420
    },
    {
        id: '6',
        name: 'Math 2',
        price: 500
    }
]

/* syntax to perform basic operation over server

    app.Operation_Name(Route, Function)

    syntax of this function -
    function name(request, response){
        works
            - process request
            - response generator
    }
*/

app.get('/books', (req, res) => {
    if(req.query.show == 'all'){
        return res.json(books);
    } 
    if(req.query.show == '300'){
        const result = books.filter((book) => book.price <300);
        return res.json(result);    //response against the request
    }
    if(req.query.show == '400'){
        const result = books.filter((book) => book.price <400);
        return res.json(result);    //response against the request
    }
    return res.json(books);
})

app.post('/books', (req, res) => {  //user jokhon post request pathabe tokhon eta sure that she kichu na kichu info dibei request er sathe. Ar ei info ashbe request er body te kore json data akare.
    // console.log(req.body);
    const book = req.body;
    books.push(book)

    res.json(books);
})
//using this server we can send post & get request. But we can't perform other task like put, delete etc. To do these operation we can user dev tools like POSTMAN, INSOMNIA, HOPPSCOTCH, etc.
app.listen(8000, () => {
    console.log('Server is listening on port 8000');
})