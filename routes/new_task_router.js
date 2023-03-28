const router = require("express").Router();
const Task = require('../models/task')
const mongoose = require('mongoose');

router.post('/new', async (req, res, next) => {
    if (!(req.body.name && req.body.status && req.body.dueDate)) {
        res.status(400).redirect('/wrong-input');
        return next()
    }
    const newTask = structuredClone(req.body)
    try {
        let task = await Task.findOne({'name': newTask.name})
        if (task) {
            return res.redirect('wrong-input')
        }
        task = new Task({
            name: newTask.name,
            status: parseInt(newTask.status),
            dueDate: new Date(newTask.dueDate)
        })
        console.log(task)

        task.save();
        // next()
        res.redirect('/')
    } catch (error) {
        return res.status(500)    
    }

})

module.exports = router