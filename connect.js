const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        mongoose.set('strictQuery', true)

        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDb