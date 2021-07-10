const express = require("express")
const graphqlHTTP = require("express-graphql")
const mongoose = require('mongoose')
const app = express()

mongoose.connect('CONECTION URL')
mongoose.connection.once('open', () => {
    console.log('db connected');
})

app.use('/graphql', graphqlHTTP({
    
}))
app.listen(4000, () => {
    console.log('listening port 4000')
})