import {Schema, model} from 'mongoose'


const serveSchema = Schema({
    name: String,
    dni: Number,
    post: String,
    vouchers: Number,
    prince: String,
    date: String,
}, { versionKey: false })


export const serve = model('users', serveSchema)