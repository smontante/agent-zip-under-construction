require('../db/mongoose')
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const Ticket = require('../models/ticket')
const publicDirectioryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectioryPath))
app.use(express.json());

app.post('/ticket', (req, res)=> {
    const ticket = new Ticket(req.body);
    console.log('lead:', req.body)

    ticket.save().then(()=> {
        res.status(201).send(ticket)
    }).catch((e)=> {
        res.status(400).send(e)
    })
})

app.listen(port, ()=> {
    console.log('listening on port ', port)
})



