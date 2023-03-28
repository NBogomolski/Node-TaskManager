const mongoose = require('mongoose')
const connectString = "mongodb+srv://h1dd3n:h1dd3n@taskmanager.stjepnp.mongodb.net/?retryWrites=true&w=majority"

const connectToDb = () => {
    return mongoose.connect(connectString, {useNewUrlParser: true})
}

module.exports = connectToDb