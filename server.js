const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDb = require('./config/connectDb');
const path = require('path');

//config dot env file
dotenv.config();

//call database
connectDb();

//rest object
const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())


// app.use(colors())

//routes
//transactions
app.use('/api/v1/users', require('./routes/userRoutes'))

//users
app.use('/api/v1/transactions', require('./routes/transactionRoutes'))

//static files
app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

//port
const PORT = 8080 || process.env.PORT

//listen
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});