import mongoose from "mongoose"

export const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost/tsapidb')
        console.log('Connected to database')
    } catch (err) {
        console.log(`error with connect -> ${err}`)
    }
}