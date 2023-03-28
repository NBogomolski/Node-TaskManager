const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: String,
    status: Number,
    dueDate: Date,
})

module.exports = mongoose.model('Task', taskSchema, 'tasks')