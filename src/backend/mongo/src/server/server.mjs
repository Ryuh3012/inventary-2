import mongoose from 'mongoose'


const serveSchema = mongoose.Schema({
    name: String,
    dni: Number,
    paymentType: String,
    prince: Number,
    reference: Number,
    product: String,
    date: String,
}, { versionKey: false })


export const serve = mongoose.model('data', serveSchema)