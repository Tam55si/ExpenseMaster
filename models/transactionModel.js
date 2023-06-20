const mongoose = require('mongoose');


//schema design

const transactionSchema = new mongoose.Schema(

    {
        userid: {
            type: String,
            required: [true]
        },
        amount: {
            type: Number,
            required: [true, 'Amount is required']
        },
        type: {
            type: String,
            required: [true, 'Type is required']
        },
        category: {
            type: String,
            required: [true, 'Category is required'],

        },
        reference: {
            type: String,

        },
        description: {
            type: String,
            required: [true, 'Description is required'],
        },
        date: {
            type: Date,
            required: [true, 'Date is required'],
        },
    }, { timestamps: true }
)

const transactionModel = mongoose.model('transections', transactionSchema)
module.exports = transactionModel;