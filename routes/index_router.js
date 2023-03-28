const router = require('express').Router()
const Task = require('../models/task')


router.get("/", async (req, res, next) => {
    let tasks = await Task.find()
    res.render("index", {
        tasks: tasks,
    });
});

module.exports = router