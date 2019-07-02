const mongoose = require('mongoose')

const Ticket = mongoose.model('ticket', {
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    number: {
        type: Number,
    },
    message: {
        type: String
    }
})

module.exports = Ticket

