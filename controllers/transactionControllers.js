const transactionModel = require('../models/transactionModel');
const moment = require('moment');


//login
const getAllTransaction = async (req, res) => {
    try {
        const { type } = req.body
        const { selectedDate } = req.body
        const { frequency } = req.body
        const transactions = await transactionModel.find({
            ...(frequency !== 'custom' ? {
                date: {
                    $gt: moment().subtract(Number(frequency), "d").toDate(),
                },
            } : {
                date: {
                    $gte: selectedDate[0],
                    $lte: selectedDate[1],
                }
            }),
            userid: req.body.userid,
            ...(type !== 'all' && { type }),
        })
        res.status(200).json(transactions);


    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
};
//add new Transaction
const addTransaction = async (req, res) => {
    try {

        const newTransaction = new transactionModel(req.body)
        await newTransaction.save()
        res.status(201).send("Transaction Created")


    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
};

//edit transaction
const editTransaction = async (req, res) => {
    try {

        await transactionModel.findOneAndUpdate({ _id: req.body.transactionId }, req.body.payload);
        res.status(200).send("Transaction Edited")


    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
};

//delete transaction
const deleteTransaction = async (req, res) => {
    try {

        await transactionModel.findOneAndDelete({ _id: req.body.transactionId });
        res.status(200).send("Transaction Deleted")


    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
};

module.exports = { getAllTransaction, addTransaction, editTransaction, deleteTransaction };