const express = require('express');
const { getAllTransaction, addTransaction, editTransaction, deleteTransaction } = require('../controllers/transactionControllers');

const router = express.Router()

//routers
//add Transaction 
//method - POST
router.post('/add-transaction', addTransaction)

//edit Transaction 
//method - POST
router.post('/edit-transaction', editTransaction)

//delete Transaction 
//method - POST
router.post('/delete-transaction', deleteTransaction)

//get all Transaction 
//method - POST
router.post('/get-transaction', getAllTransaction)


module.exports = router